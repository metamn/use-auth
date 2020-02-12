import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useLocalStorage from "../../../useLocalStorage";
import useAPI, {
  useAPIPropTypes,
  isApiError,
  getApiErrorMessage,
  mergeApiParams
} from "../../../useAPI";

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
   * Defines the login function
   */
  login: PropTypes.func,
  /**
   * Defines the logout function
   */
  logout: PropTypes.func,
  /**
   * Defines the register function
   */
  register: PropTypes.func,
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
  login: () => {
    return console.log("Finster API auth login");
  },
  logout: () => {
    return console.log("Finster API auth logout");
  },
  register: () => {
    return console.log("Finster API auth register");
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

  /**
   * Manages the login
   */
  const login = props => {
    const params = mergeApiParams({ requestProps: props });
    const { data } = useAPI(params);

    useEffect(() => {
      if (isApiError(data)) {
        setMessage(getApiErrorMessage(data));
      } else {
        console.log("data:", data);
        setMessage("API request was successful");
      }
    }, [data]);
  };

  return { isAuthenticated, token, message, login, strategy };
};

useAuthStrategyTokenFinsterAPI.propTypes = propTypes;
useAuthStrategyTokenFinsterAPI.defaultProps = defaultProps;

export { useAuthStrategyTokenFinsterAPI };
