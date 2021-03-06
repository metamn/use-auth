import React from "react";

import { useAuth } from "./../../hooks";

const credentials = {
  email: "p.schinkel+5@vacat.nl",
  password: "test123"
};

const newUser = {
  name: "test1",
  email: "test1@test.com",
  password: "test12345",
  recaptcha_ignore: "293kwlxh"
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

  const buttons = isAuthenticated ? (
    <button onClick={() => logout()}>Logout</button>
  ) : (
    <>
      <button onClick={() => login(credentials)}>Login</button>
      <button onClick={() => register(newUser)}>Register</button>
    </>
  );

  return (
    <div className="FinsterStrategy">
      <h3>No forms (wired in props)</h3>
      <ul>
        <li key="strategy">Strategy: {strategy}</li>
        <li key="isAuthenticated">
          <strong>isAuthenticated: {JSON.stringify(isAuthenticated)}</strong>
        </li>
        <li key="message">Message: {message}</li>
        <li key="button">{buttons}</li>
      </ul>
    </div>
  );
};

export default FinsterStrategy;
