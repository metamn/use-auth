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
const FinsterForms = props => {
  return (
    <div className="FinsterForms">
      <h3>Forms (dynamic props)</h3>
    </div>
  );
};

FinsterForms.propTypes = propTypes;
FinsterForms.defaultProps = defaultProps;

export default FinsterForms;
export {
  propTypes as FinsterFormsPropTypes,
  defaultProps as FinsterFormsDefaultProps
};
