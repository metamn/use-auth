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
const defaultProps = {};

/**
 * Displays the component
 */
const FinsterAPI = props => {
  const { isAuthenticated, token, message, strategy } = useAuth();

  return (
    <div className="FinsterAPI">
      <h3>Finster - with use-api</h3>
      <ul>
        <li>isAuthenticated: {JSON.stringify(isAuthenticated)}</li>
        <li>Token: {token}</li>
        <li>Strategy: {strategy}</li>
        <li>Message: {message}</li>
      </ul>
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
