/**
 * The authentication strategy for Finster
 *
 * @see useAuthStrategyTokenFinster.md for details
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { queryString } from "query-string";

import useData, {
  useDataPropTypes,
  useDataDefaultProps,
  getUseDataHookProps,
  getUseDataInitialValue
} from "../../../useData";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Tells if the user is authenticated
   */
  isAuthenticated: PropTypes.bool,
  /**
   * Returns the user object
   */
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  /**
   * Defines the login function
   */
  login: PropTypes.func,
  /**
   * Defines the logout function
   */
  logout: PropTypes.func,
  /**
   * The authentication strategy
   */
  strategy: PropTypes.string,
  /**
   * The message in case of an error
   */
  message: PropTypes.string,
  /**
   * Defines how to connect to the API
   */
  api: PropTypes.shape(useDataPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  isAuthenticated: false,
  user: {
    email: "",
    password: ""
  },
  login: () => {
    return console.log("Finster auth login");
  },
  login30: () => {
    return console.log("Finster auth login for 30 days");
  },
  logout: () => {
    return console.log("Finster auth logout");
  },
  strategy: "finster",
  message: "",
  api: {
    options: {
      /**
       * The fetcher function
       */
      promiseFn: () => console.log("Fetcher function for useDataAsync"),
      /**
       * Params for the fetcher function, if any
       */
      promiseFnParams: {},
      /**
       * The default / initial data to be returned
       */
      initialValue: "Loading ...."
    }
  }
};

/**
 * Finster specific fetcher
 *
 */
const fetcherLogin = async ({ user }) => {
  const parsedUser = queryString.stringify(user);

  console.log("ps:", parsedUser);

  const response = await fetch(
    `http://api.finsterdata.com/v1/login?${parsedUser}`
  );

  if (response && response.status === "error")
    throw new Error(`Error: ${response}`);
  return response.json();
};

/**
 * Displays the component
 */
const useAuthStrategyTokenFinster = props => {
  /**
   * Loads default props and retuns them until they'll be overwritten
   */
  let { user, strategy, login, logout, api } = defaultProps;

  /**
   * Manages auth state
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Manages the message content
   */
  const [message, setMessage] = useState("");

  /**
   * Manages the API call
   */
  const [apiCall, setApiCall] = useState(api);

  /**
   * Sets up the API call
   */
  let apiCallProps = getUseDataHookProps(apiCall);

  useEffect(() => {
    apiCallProps = getUseDataHookProps(apiCall);
    console.log("apiCallProps:", apiCallProps);
  }, [apiCall]);

  /**
   * Performs an API call
   */
  const { data, error } = useData(apiCallProps);

  useEffect(() => {
    console.log("d:", data);
    if (data && data.status) {
      setIsAuthenticated(data.status !== "error");
      setMessage(data.user_message);
    } else {
      setMessage(data);
    }
  }, [data]);

  /**
   * Defines the login function
   */
  login = user => {
    console.log("l");
    setApiCall({
      options: {
        promiseFn: fetcherLogin,
        promiseFnParams: { user: user },
        initialValue: "Logging in ..."
      }
    });
  };

  /**
   * Defines the logout function
   */
  logout = () => {
    setApiCall(api);
  };

  return { isAuthenticated, user, login, logout, strategy, message };
};

useAuthStrategyTokenFinster.propTypes = propTypes;

export { useAuthStrategyTokenFinster };
