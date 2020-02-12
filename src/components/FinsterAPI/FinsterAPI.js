import React from "react";
import PropTypes from "prop-types";

import { useAuth } from "./../../hooks";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {
  login: {
    path: {
      endpoint: "login"
    },
    params: {
      queryParams: {
        email: "p.schinkel+5@vacat.nl",
        password: "test123"
      }
    },
    defaultData: "Logging in ..."
  }
};

/**
 * Displays the component
 */
const FinsterAPI = props => {
  const { login: loginAPICallProps } = props;
  const { isAuthenticated, token, message, login, strategy } = useAuth();

  const buttons = isAuthenticated ? (
    <button>Logout</button>
  ) : (
    <>
      <button onClick>Login</button>
      <button>Register</button>
    </>
  );

  return (
    <div className="FinsterAPI">
      <h3>Finster - with use-api</h3>
      <ul>
        <li>isAuthenticated: {JSON.stringify(isAuthenticated)}</li>
        <li>Token: {token}</li>
        <li>Strategy: {strategy}</li>
        <li>Message: {message}</li>
      </ul>
      {buttons}
    </div>
  );
};

FinsterAPI.propTypes = propTypes;
FinsterAPI.defaultProps = defaultProps;

export default FinsterAPI;
export {
  propTypes as FinsterAPIPropTypes,
  defaultProps as FinsterAPIDefaultProps
};
