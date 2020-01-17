import React from "react";

import { useAuth } from "./../../hooks";

/**
 * Displays the component
 */
const DefaultStrategy = props => {
  const { isAuthenticated, strategy, user, message } = useAuth();

  return (
    <div className="DefaultStrategy">
      <ul>
        <li key="strategy">Strategy: {strategy}</li>
        <li key="isAuthenticated">
          isAuthenticated: {JSON.stringify(isAuthenticated)}
        </li>
        <li key="user">User: {JSON.stringify(user)}</li>
        <li key="message">Message: {message}</li>
      </ul>
    </div>
  );
};

export default DefaultStrategy;
