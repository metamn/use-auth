import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from "react-google-recaptcha-v3";

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

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async event => {
    console.log("1");

    const { target } = event;
    const name = target[0].value;
    const email = target[1].value;
    const password = target[2].value;

    console.log("name");

    try {
      const token = await executeRecaptcha("register");

      console.log("2");

      const newUser = {
        name: name,
        email: email,
        password: password,
        recaptcha_response: token
      };
      console.log("newUser:", newUser);

      register(newUser);
    } catch (e) {
      console.error(e);
    }

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
