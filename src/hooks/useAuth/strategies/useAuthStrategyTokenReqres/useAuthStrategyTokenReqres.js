/**
 * The authentication strategy for Reqres
 *
 * @see useAuthStrategyTokenReqres.md for details
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useData, {
  useDataPropTypes,
  useDataDefaultProps,
  useDataGetHookProps,
  useDataGetInitialValue
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
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  },
  login: () => {
    return console.log("Local auth login");
  },
  logout: () => {
    return console.log("Local auth logout");
  },
  strategy: "reqres",
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
 * Reqres.in specific fetcher
 *
 */
const fetcherLogin = async ({ user }) => {
  const data = user;

  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return response.json();
};

/**
 * Displays the component
 */
const useAuthStrategyTokenReqres = props => {
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
   * Manages the token
   */
  const [token, setToken] = useState(null);

  /**
   * Sets up the api call
   */
  api = {
    options: {
      promiseFn: fetcherLogin,
      promiseFnParams: { user: user },
      initialValue: "Loading...."
    }
  };

  const hookProps = useDataGetHookProps(api);

  /**
   * Performs an API call
   */
  const { data, error } = useData(hookProps);

  useEffect(() => {
    console.log("d:", data);
    if (data && data.token) {
      const { token } = data;
      setIsAuthenticated(true);
      setMessage("Authenticated");
      setToken(token);
    } else {
      setIsAuthenticated(false);
      setMessage("Authentication error: ", data);
      setToken(null);
    }
  }, [data]);

  /**
   * Defines the login function
   */
  login = props => {
    //
  };

  /**
   * Defines the logout function
   */
  logout = () => {
    setIsAuthenticated(false);
    setMessage("Logout done");
    setToken(null);
  };

  return { isAuthenticated, user, login, logout, strategy, message, token };
};

useAuthStrategyTokenReqres.propTypes = propTypes;

export { useAuthStrategyTokenReqres };
