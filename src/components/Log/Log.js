import React from "react";

import { useAuth } from "./../../hooks";

/**
 * Displays the auth object
 */
const Log = props => {
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <div className="Log">
      <ul>
        <li key="isAuthenticated">
          isAuthenticated:{JSON.stringify(isAuthenticated)}
        </li>
        <li key="user">User:{JSON.stringify(user, null, 2)}</li>
      </ul>
    </div>
  );
};

export default Log;
