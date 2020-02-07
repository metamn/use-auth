import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import { useAuth, useData } from "./../../hooks";
import { getUseDataHookProps } from "./../../hooks/useData";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {
  credentials: {
    email: "p.schinkel+5@vacat.nl",
    password: "test123"
  },
  api: {
    options: {
      /**
       * The fetcher function
       */
      promiseFn: () => console.log("Default fetcher function"),
      /**
       * Params for the fetcher function, if any
       */
      promiseFnParams: {},
      /**
       * The default / initial data to be returned
       */
      initialValue: {
        status: "initial",
        message: "Please login or register"
      }
    }
  }
};

/**
 * Finster specific fetcher for getting the subscriptions
 *
 */
const fetcherSubscriptions = async ({ user }) => {
  const encodedParams = queryString.stringify(user);

  const response = await fetch(
    `http://api.finsterdata.com/v1/subscription.php?action=list`
  );

  if (response && response.status === "error")
    throw new Error(`Error: ${response}`);

  return response.json();
};

/**
 * Displays the component
 */
const FinsterProtected = props => {
  const { credentials, api } = props;

  const { isAuthenticated, login, token } = useAuth();

  /**
   * State to be loaded with results
   */
  const [results, setResults] = useState(null);

  /**
   * State to be loaded with status messages from API calls
   */
  const [message, setMessage] = useState("");

  /**
   * Manages the API calls
   *
   * - Every API call does nothing than changing this `apiCall` value.
   * - After that change a new `useData` call is made.
   */
  const [apiCall, setApiCall] = useState(getUseDataHookProps(api));

  /**
   * Performs the API call
   */
  const { data, error } = useData(apiCall);

  /**
   * Manages the result of an API call
   *
   */
  useEffect(() => {
    if (data && data.status) {
      const message = data.message
        ? data.message
        : data.user_message
        ? data.user_message
        : "No message from the API";

      setMessage(message);
    } else {
      const message = error ? JSON.stringify(error) : "Loading ...";
      setMessage(message);
    }
  }, [data, error]);

  /**
   * Loads results on click
   */
  const getResults = () => {
    setApiCall(
      getUseDataHookProps({
        options: {
          promiseFn: fetcherSubscriptions,
          promiseFnParams: { token: token },
          initialValue: { message: "Loading subscriptions ..." }
        }
      })
    );
  };

  const Content = () => {
    return (
      <>
        <p>isAuthenticated: {JSON.stringify(isAuthenticated)}</p>
        <p>Message: {message}</p>
        <button onClick={() => getResults()}>Load results</button>
        <p>Results: {results}</p>
      </>
    );
  };

  const protectedContent = isAuthenticated ? (
    <Content />
  ) : (
    <p>This content is protected. Please login.</p>
  );

  const loginButton = isAuthenticated ? (
    ""
  ) : (
    <p>
      <button onClick={() => login(credentials)}>Login</button>
    </p>
  );

  return (
    <div className="FinsterProtected">
      <h3>Protected area</h3>
      {protectedContent}
      {loginButton}
    </div>
  );
};

FinsterProtected.propTypes = propTypes;
FinsterProtected.defaultProps = defaultProps;

export default FinsterProtected;
export {
  propTypes as FinsterProtectedPropTypes,
  defaultProps as FinsterProtectedDefaultProps
};
