import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "./../../hooks";

const credentials = {
  email: "p.schinkel+5@vacat.nl",
  password: "test123"
};

/**
 * Displays the component
 */
const FinsterStrategy = props => {
  const {
    isAuthenticated,
    login,
    logout,
    register,
    strategy,
    message
  } = useAuth();

  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const nameRef = React.createRef();
  const recaptchaRef = React.createRef();

  const formSubmit = () => {
    console.log("s");
    //const email = emailRef.current.value();
    const recaptchaValue = recaptchaRef.current.getValue();
    //console.log("e:", email);
  };

  const buttons = isAuthenticated ? (
    <button onClick={() => logout()}>Logout</button>
  ) : (
    <>
      <button onClick={() => login(credentials)}>Login</button>
      <form onSubmit={() => formSubmit()}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LeNBckSAAAAAIdiceIunIQR4pkCk0ZnQDf_cojD"
        />
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email Address"
          required=""
          ref={emailRef}
        />
        <br />
        password:
        <input name="password" type="password" required="" ref={passwordRef} />*
        <br />
        name:
        <input name="name" type="text" ref={nameRef} />
        <br />
        <input name="agree" type="checkbox" /> I agree to the Terms and
        Conditions
        <br />
        <input type="submit" />
        <br />
      </form>
    </>
  );

  return (
    <div className="FinsterStrategy">
      <ul>
        <li key="strategy">Strategy: {strategy}</li>
        <li key="isAuthenticated">
          isAuthenticated: {JSON.stringify(isAuthenticated)}
        </li>
        <li key="credentials">
          Credentials: {JSON.stringify(credentials, null, 2)}
        </li>
        <li key="message">Message: {message}</li>
        <li key="button">{buttons}</li>
      </ul>
    </div>
  );
};

export default FinsterStrategy;
