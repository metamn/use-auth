import React from "react";
import PropTypes from "prop-types";

import { useAuth } from "./../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Credentials to log in
   */
  credentials: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  /**
   * The received token after a successful login
   */
  token: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  credentials: {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  },
  token: "Not yet set"
};

/**
 * Displays the component
 */
const ReqresStrategy = props => {
  const { credentials } = props;

  const {
    isAuthenticated,
    login,
    logout,
    strategy,
    message,
    token
  } = useAuth();

  const button = isAuthenticated ? (
    <button onClick={() => logout()}>Logout</button>
  ) : (
    <button onClick={() => login(credentials)}>Login</button>
  );

  return (
    <div className="ReqresStrategy">
      <ul>
        <li key="strategy">Strategy: {strategy}</li>
        <li key="isAuthenticated">
          isAuthenticated: {JSON.stringify(isAuthenticated)}
        </li>
        <li key="credentials">
          Credentials: {JSON.stringify(credentials, null, 2)}
        </li>
        <li key="message">Message: {message}</li>
        <li key="token">Token: {token}</li>
        <li key="button">{button}</li>
      </ul>
    </div>
  );
};

ReqresStrategy.propTypes = propTypes;
ReqresStrategy.defaultProps = defaultProps;

export default ReqresStrategy;
export {
  propTypes as ReqresStrategyPropTypes,
  defaultProps as ReqresStrategyDefaultProps
};
