import React from "react";

import { useAuth } from "./../../hooks";

const credentials = {
  email: "p.schinkel+5@vacat.nl",
  password: "test123"
};

/**
 * Displays the component
 */
const FinsterStrategy = props => {
  const { isAuthenticated, login, logout, strategy, message } = useAuth();

  const { email, password } = credentials;
  const apiKey = `http://api.finsterdata.com/v1/login?email=${email}&password=${password}`;

  const button = isAuthenticated ? (
    <button onClick={() => logout()}>Logout</button>
  ) : (
    <button onClick={() => login(apiKey)}>Login</button>
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
        <li key="button">{button}</li>
      </ul>
    </div>
  );
};

export default FinsterStrategy;
