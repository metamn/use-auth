/**
 * A hook for working with data
 *
 * @see useData.md
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Imports a strategy / library.
 *
 * - This can be replaced anytime
 */
import useDataAsync, {
  useDataAsyncPropTypes,
  useDataAsyncDefaultProps,
  getHookPropsUseDataAsync,
  getInitialValueUseDataAsync
} from "./strategies/useDataAsync";

/**
 * Defines the prop types
 */
const propTypes = PropTypes.shape(useDataAsyncPropTypes);

/**
 * Defines the default props
 */
const defaultProps = useDataAsyncDefaultProps;

/**
 * Implements the hook
 */
const useData = props => {
  /**
   * Prepares the props
   *
   * - This step has to be performed to map a strategy to the hook code below
   */
  const initialValue = getInitialValueUseDataAsync(props);
  const hookProps = getHookPropsUseDataAsync(props);

  /**
   * Queries the API
   */
  const { data, error, reload, cancel } = useDataAsync(hookProps);

  /**
   * Returns default data while real data is loaded from the API
   */
  if (data === undefined) {
    return { data: initialValue, error, reload, cancel };
  }

  /**
   * Returns the error
   */
  if (error) {
    return { data: null, error, reload, cancel };
  }

  /**
   * Returns data and functions
   */
  return { data: data, reload, cancel };
};

useData.propTypes = propTypes;
useData.defaultProps = defaultProps;

export default useData;
export {
  propTypes as useDataPropTypes,
  defaultProps as useDataDefaultProps,
  getHookPropsUseDataAsync as getUseDataHookProps,
  getInitialValueUseDataAsync as getUseDataInitialValue
};
