import React from "react";

import { useAuth } from "./../../hooks";

/**
 * Displays the auth object
 */
const Log = props => {
  const { isAuthenticated, login, logout, strategy, message } = useAuth();

  const credentials = {
    email: "test@test.com",
    password: "1234"
  };

  const button = isAuthenticated ? (
    <button onClick={() => logout()}>Logout</button>
  ) : (
    <button onClick={() => login(credentials)}>Login</button>
  );

  return (
    <div className="Log">
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

export default Log;
