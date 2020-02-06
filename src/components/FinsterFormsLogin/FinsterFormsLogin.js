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
const FinsterFormsLogin = props => {
  const { isAuthenticated, login, message } = useAuth();

  const handleSubmit = event => {
    const { target } = event;
    const email = target[0].value;
    const password = target[1].value;
    const credentials = { email: email, password: password };
    console.log("credentials:", credentials);

    login(credentials);

    event.preventDefault();
  };

  return (
    <div className="FinsterFormsLogin">
      <h4>Login</h4>

      <ul>
        <li>isAuthenticated: {isAuthenticated}</li>
        <li>Message: {message}</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input name="email" type="text" />
        </label>
        <label>
          <p>Password:</p>
          <input name="password" type="password" />
        </label>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
};

FinsterFormsLogin.propTypes = propTypes;
FinsterFormsLogin.defaultProps = defaultProps;

export default FinsterFormsLogin;
export {
  propTypes as FinsterFormsLoginPropTypes,
  defaultProps as FinsterFormsLoginDefaultProps
};
