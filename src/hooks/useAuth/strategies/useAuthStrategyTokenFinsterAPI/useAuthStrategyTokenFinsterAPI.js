import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useLocalStorage from "../../../useLocalStorage";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Tells if the user is authenticated
   */
  isAuthenticated: PropTypes.bool,
  /**
   * Returns the token
   */
  token: PropTypes.string,
  /**
   * Returns the user object
   */
  user: PropTypes.shape({
    email: PropTypes.string
  }),
  /**
   * Defines the key for storing auth status in local storage
   */
  localStorageKey: PropTypes.string,
  /**
   * The authentication strategy name
   */
  strategy: PropTypes.string,
  /**
   * The message in case of an error
   */
  message: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  isAuthenticated: false,
  token: "",
  user: {
    email: ""
  },
  localStorageKey: "localStorageKey",
  strategy: "finsterAPI",
  message: ""
};

/**
 * Displays the component
 */
const useAuthStrategyTokenFinsterAPI = () => {
  const {
    localStorageKey,
    token: tokenFromProps,
    message: messageFromProps,
    strategy
  } = defaultProps;

  /**
   * Checks local storage if the user is authenticated already
   */
  const [
    isAuthenticatedLocalStorage,
    setIsAuthenticatedLocalStorage
  ] = useLocalStorage(localStorageKey, false);

  /**
   * Manages auth state
   *
   * - First it is populated with the value from the local storage
   */
  const [isAuthenticated, setIsAuthenticated] = useState(
    isAuthenticatedLocalStorage
  );

  /**
   * Manages the token
   *
   * - First it is populated with the value from the props
   */
  const [token, setToken] = useState(tokenFromProps);

  /**
   * Manages the status message
   *
   * - First it is populated with the value from the props
   */
  const [message, setMessage] = useState(messageFromProps);

  return { isAuthenticated, token, message, strategy };
};

useAuthStrategyTokenFinsterAPI.propTypes = propTypes;
useAuthStrategyTokenFinsterAPI.defaultProps = defaultProps;

export { useAuthStrategyTokenFinsterAPI };
