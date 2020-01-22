/**
 * The authentication strategy for Reqres
 *
 * @see useAuthStrategyTokenReqres.md for details
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useData, {
  useDataPropTypes,
  useDataDefaultProps
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
    key: "https://reqres.in/api/login",
    fetcher: url => fetch(url).then(r => r.json()),
    options: {
      initialData: "Loading..."
    }
  }
};
/**
 * Displays the component
 */
const useAuthStrategyTokenReqres = props => {
  /**
   * Loads default props and retuns them until they'll be overwritten
   */
  let { user, strategy, login, logout, api: defaultApi } = defaultProps;

  /**
   * Sets up the api call
   */
  const { key, fetcher, options } = defaultApi;
  const specialApi = {
    key: [key, user],
    fetcher: (url, user) =>
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }).then(r => r.json()),
    options: options
  };

  /**
   * Manages auth state
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Manages the message content
   */
  const [message, setMessage] = useState("");

  /**
   * Manages the API calls
   *
   * - Anytime the `api` value is changing a new API call is made
   */
  const [api, setApi] = useState(specialApi);

  useEffect(() => {
    console.log("a:", api);
  }, [api]);

  /**
   * Performs an API call
   */
  const { data } = useData(api);

  useEffect(() => {
    console.log("d:", data);
    if (data && data.status) {
      setIsAuthenticated(data.status !== "error");
      setMessage(data.user_message);
    } else {
      setMessage(data);
    }
  }, [data, api]);

  /**
   * Defines the login function
   */
  login = props => {
    setApi({ ...api, key: props });
  };

  /**
   * Defines the logout function
   */
  logout = () => {
    setIsAuthenticated(false);
    setMessage("Logout done");
  };

  return { isAuthenticated, user, login, logout, strategy, message };
};

useAuthStrategyTokenReqres.propTypes = propTypes;

export { useAuthStrategyTokenReqres };
