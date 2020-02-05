/**
 * The authentication strategy for Finster
 *
 * @see useAuthStrategyTokenFinster.md for details
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";

import useData, {
  useDataPropTypes,
  useDataDefaultProps,
  getUseDataHookProps,
  getUseDataInitialValue
} from "../../../useData";

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
   * Defines the register function
   */
  register: PropTypes.func,
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
  api: PropTypes.shape(useDataPropTypes),
  /**
   * Defines the key for storing auth status in local storage
   */
  localStorageKey: PropTypes.string,
  /**
   * The params for a new user registration
   */
  newUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    recaptcha_response: PropTypes.string
  })
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
  register: () => {
    return console.log("Finster auth register");
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
  },
  localStorageKey: "localStorageKey",
  newUser: {
    name: "test1",
    email: "test1@test.com",
    password: "test12345",
    recaptcha_response: "has-to-be-set-via-a-form"
  }
};

/**
 * Finster specific fetcher for login
 *
 */
const fetcherLogin = async ({ user }) => {
  const encodedUser = queryString.stringify(user);

  const response = await fetch(
    `http://api.finsterdata.com/v1/login?${encodedUser}`
  );

  if (response && response.status === "error")
    throw new Error(`Error: ${response}`);
  return response.json();
};

/**
 * Finster specific fetcher for register
 *
 */
const fetcherRegister = async ({ newUser }) => {
  const encoded = queryString.stringify(newUser);

  const response = await fetch(
    `http://api.finsterdata.com/v1/register?${encoded}`
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
  let {
    user,
    strategy,
    login,
    logout,
    api,
    localStorageKey,
    register,
    newUser
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
   */
  const [isAuthenticated, setIsAuthenticated] = useState(
    isAuthenticatedLocalStorage
  );

  /**
   * Manages the message content
   */
  const [message, setMessage] = useState("");

  /**
   * Manages the API calls (login, register, etc.)
   */
  const [apiCall, setApiCall] = useState(getUseDataHookProps(api));

  /**
   * Performs an API call
   */
  const { data, error } = useData(apiCall);

  console.log("isAuthenticatedLocalStorage:", isAuthenticatedLocalStorage);

  useEffect(() => {
    if (data && data.status) {
      const authenticated = data.status !== "error";
      const message = data.user_message;
      setIsAuthenticated(authenticated);
      setIsAuthenticatedLocalStorage(authenticated);
      setMessage(message);
    } else {
      setIsAuthenticated(isAuthenticatedLocalStorage);
      setMessage(props);
    }
  }, [data, props]);

  /**
   * Defines the login function
   */
  login = user => {
    setApiCall(
      getUseDataHookProps({
        options: {
          promiseFn: fetcherLogin,
          promiseFnParams: { user: user },
          initialValue: "Logging in ..."
        }
      })
    );
  };

  /**
   * Defines the logout function
   */
  logout = () => {
    setIsAuthenticatedLocalStorage(false);
  };

  /**
   * Defines the register function
   */
  register = newUser => {
    setApiCall(
      getUseDataHookProps({
        options: {
          promiseFn: fetcherRegister,
          promiseFnParams: { newUser: newUser },
          initialValue: "Registering ..."
        }
      })
    );
  };

  return { isAuthenticated, user, login, logout, register, strategy, message };
};

useAuthStrategyTokenFinster.propTypes = propTypes;

export { useAuthStrategyTokenFinster };
