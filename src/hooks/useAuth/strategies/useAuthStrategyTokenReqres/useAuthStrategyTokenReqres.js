/**
 * The authentication strategy for Reqres
 *
 * @see useAuthStrategyTokenReqres.md for details
 */
import React from "react";
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
  return (
    <div className="useAuthStrategyTokenReqres">useAuthStrategyTokenReqres</div>
  );
};

useAuthStrategyTokenReqres.propTypes = propTypes;

export { useAuthStrategyTokenReqres };
