import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";

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
const FinsterFormsRegister = props => {
  const { isAuthenticated, register, message } = useAuth();

  const recaptchaRef = React.createRef();

  const handleSubmit = event => {
    recaptchaRef.current.execute();

    const { target } = event;

    const name = target[0].value;
    const email = target[1].value;
    const password = target[2].value;
    const reCaptcha = recaptchaRef.current.getValue();

    const newUser = {
      name: name,
      email: email,
      password: password,
      recaptcha_response: reCaptcha
    };
    console.log("newUser:", newUser);

    register(newUser);

    event.preventDefault();
  };

  return (
    <div className="FinsterFormsRegister">
      <h4>Register</h4>

      <ul>
        <li>isAuthenticated: {isAuthenticated}</li>
        <li>Message: {message}</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="name" type="text" />
        </label>
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
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LeNBckSAAAAAIdiceIunIQR4pkCk0ZnQDf_cojD"
        />
      </form>
    </div>
  );
};

FinsterFormsRegister.propTypes = propTypes;
FinsterFormsRegister.defaultProps = defaultProps;

export default FinsterFormsRegister;
export {
  propTypes as FinsterFormsRegisterPropTypes,
  defaultProps as FinsterFormsRegisterDefaultProps
};
