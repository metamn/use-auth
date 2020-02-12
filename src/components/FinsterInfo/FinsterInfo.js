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
const FinsterInfo = props => {
  const { isAuthenticated, logout, message } = useAuth();
  return (
    <div className="FinsterInfo">
      <ul>
        <li>isAuthenticated:</li>
        <li>user:</li>
        <li>message:</li>
      </ul>
      {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
      <hr />
    </div>
  );
};

FinsterInfo.propTypes = propTypes;
FinsterInfo.defaultProps = defaultProps;

export default FinsterInfo;
export {
  propTypes as FinsterInfoPropTypes,
  defaultProps as FinsterInfoDefaultProps
};
