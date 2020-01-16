/**
 * The local authentication strategy
 *
 * @see useAuthStrategyLocal.md for details
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

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
  message: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  isAuthenticated: false,
  user: {
    email: "test@test.com",
    password: "1234"
  },
  login: ({}) => {
    return console.log("Local auth login");
  },
  logout: () => {
    return console.log("Local auth logout");
  },
  strategy: "local",
  message: ""
};

/**
 * Displays the component
 */
const authStrategyLocal = () => {
  let { user, message, strategy } = defaultProps;

  /**
   * Manages auth state
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Defines the login function
   */
  const login = props => {
    const { email, password } = props;
    const { email: defaultEmail, password: defaultPassword } = user;

    if (email === defaultEmail && password === defaultPassword) {
      setIsAuthenticated(true);
      message = "Vali credentials";
    } else {
      setIsAuthenticated(false);
      user = {};
      message = "Invalid credentials";
    }
  };

  /**
   * Defines the logout function
   */
  const logout = () => {
    setIsAuthenticated(false);
    user = {};
    message = "Logout done";
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    strategy,
    message
  };
};

export { authStrategyLocal };
