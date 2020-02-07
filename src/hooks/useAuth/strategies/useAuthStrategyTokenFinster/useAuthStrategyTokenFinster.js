/**
 * The authentication strategy for Finster
 *
 * @see useAuthStrategyTokenFinster.md for details
 */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import useLocalStorage from "../../../useLocalStorage";

import useData, {
  useDataPropTypes,
  getUseDataHookProps
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
   * Returns the token
   */
  token: PropTypes.string,
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
    recaptcha_ignore: PropTypes.string
  })
};

/**
 * Defines the default props
 */
const defaultProps = {
  isAuthenticated: false,
  token: "",
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
  },
  localStorageKey: "localStorageKey",
  newUser: {
    name: "test1",
    email: "test1@test.com",
    password: "test12345",
    recaptcha_ignore: "293kwlxh"
  }
};

/**
 * Finster specific fetcher for login
 *
 */
const fetcherLogin = async ({ user }) => {
  const encodedParams = queryString.stringify(user);

  const response = await fetch(
    `http://api.finsterdata.com/v1/login?${encodedParams}`
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
  const encodedParams = queryString.stringify(newUser);

  const response = await fetch(
    `http://api.finsterdata.com/v1/register?${encodedParams}`
  );

  if (response && response.status === "error")
    throw new Error(`Error: ${response}`);

  return response.json();
};

/**
 * Finster specific fetcher for logout
 *
 */
const fetcherLogout = async ({ message }) => {
  return { status: "logout", message: message };
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
    register
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
   * Manages the token
   */
  const [token, setToken] = useState("");

  /**
   * Manages the API calls (login, register, etc.)
   *
   * - Every API call does nothing than changing this `apiCall` value.
   * - After that change a new `useData` call is made.
   */
  const [apiCall, setApiCall] = useState(getUseDataHookProps(api));

  /**
   * Performs an API call
   */
  const { data, error, timestamp } = useData(apiCall);

  /**
   * Manages the result of an API call
   *
   */
  useEffect(() => {
    if (data && data.status) {
      /**
       * Controlled state
       *
       * - All calls should return a `data` object with a `status` field
       */
      const authenticated = data.status === "ok";
      const token = data.token ? data.token : "";
      const message = data.token
        ? `Token: ${data.token}`
        : data.message
        ? data.message
        : data.user_message
        ? data.user_message
        : "No message from the API";

      setIsAuthenticated(authenticated);
      setIsAuthenticatedLocalStorage(authenticated);
      setToken(token);
      setMessage(message);
    } else {
      /**
       * Uncontrolled state
       *
       * - No `data` object and `status` field.
       * - An error occured somewhere else, perhaps not in this file
       */
      const message = isAuthenticatedLocalStorage
        ? "Auth done via local storage"
        : error
        ? JSON.stringify(error)
        : "Loading ...";

      setIsAuthenticated(isAuthenticatedLocalStorage);
      setMessage(message);
    }
  }, [
    data,
    timestamp,
    error,
    isAuthenticatedLocalStorage,
    setIsAuthenticatedLocalStorage
  ]);

  /**
   * Defines the register function
   */
  register = newUser => {
    setApiCall(
      getUseDataHookProps({
        options: {
          promiseFn: fetcherRegister,
          promiseFnParams: { newUser: newUser },
          initialValue: { message: "Registering ..." }
        }
      })
    );
  };

  /**
   * Defines the login function
   */
  login = user => {
    setApiCall(
      getUseDataHookProps({
        options: {
          promiseFn: fetcherLogin,
          promiseFnParams: { user: user },
          initialValue: { message: "Logging in ..." },
          watch: user
        }
      })
    );
  };

  /**
   * Defines the logout function
   */
  logout = () => {
    setIsAuthenticatedLocalStorage(false);
    setApiCall(
      getUseDataHookProps({
        options: {
          promiseFn: fetcherLogout,
          promiseFnParams: { message: "Logged out" }
        }
      })
    );
  };

  return {
    isAuthenticated,
    token,
    user,
    login,
    logout,
    register,
    strategy,
    message
  };
};

useAuthStrategyTokenFinster.propTypes = propTypes;

export { useAuthStrategyTokenFinster };
