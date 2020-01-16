/**
 * The authentication hook
 *
 * Offers:
 * - `<ProvideAuth>` - A top level auth provider
 * - `useAuth` - A hook to be called by components
 * - `useProvideAuth` - An auth strategy
 *
 * @see useAuth.md for details
 */
import React, { useState, useEffect, useContext, createContext } from "react";
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
  user: PropTypes.object,
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
  strategy: PropTypes.oneOf["none"]
};

/**
 * Defines the default props
 */
const defaultProps = {
  isAuthenticated: false,
  user: {},
  login: () => {
    console.log("Login");
  },
  logout: () => {
    console.log("Logout");
  },
  strategy: "none"
};

/**
 * Manages the authentication.
 *
 * - Returns the isAuthenticated flag, the user object and the auth methods
 * - Implements an authentication strategy
 */
const useProvideAuth = strategy => {
  switch (strategy) {
    default:
      return defaultProps;
  }
};

/**
 * Defines a context where auth is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the `useAuth` hook fetch the current user, the hook simply calls useContext to get the data from the top level provider
 */
const authContext = createContext();

/**
 * Provides a top level auth wrapper with the auth context
 *
 * - This is the main auth provider
 * - It makes the auth object available to any child component that calls `useAuth`.
 */
const ProvideAuth = ({ strategy, children }) => {
  const auth = useProvideAuth(strategy);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

/**
 * Defines the main hook
 *
 * - Returns the auth context / object
 * - To be used inside components
 */
const useAuth = () => {
  return useContext(authContext);
};

export { useAuth, ProvideAuth };
