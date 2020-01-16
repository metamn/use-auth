import React from "react";

import { useAuth } from "./../../hooks";

const credentialsLocalOk = {
  email: "test@test.com",
  password: "1234"
};

const credentialsLocalErr = {
  email: "test@test.com1",
  password: "1234"
};

/**
 * Displays the auth object
 */
const Log = props => {
  const { isAuthenticated, user, login, logout, strategy } = useAuth();

  const link = isAuthenticated ? logout() : login(credentialsLocalOk);

  return (
    <div className="Log">
      <ul>
        <li key="strategy">Strategy: {strategy}</li>
        <li key="isAuthenticated">
          isAuthenticated: {JSON.stringify(isAuthenticated)}
        </li>
        <li key="user">User: {JSON.stringify(user, null, 2)}</li>
        <li key="link">Link: {link}</li>
      </ul>
    </div>
  );
};

export default Log;
