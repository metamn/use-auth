import React from "react";
import PropTypes from "prop-types";

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
  return (
    <div className="FinsterAPI">
      <h3>Finster - with use-api</h3>
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
