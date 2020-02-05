import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "./../../hooks";

const credentials = {
  email: "p.schinkel+5@vacat.nl",
  password: "test123"
};

const registration = {
  email: "test1@test.com",
  name: "test1",
  password: "test12345",
  recaptcha_response:
    "03AOLTBLSOc-SZ22EKdubEEQW9MvQ4Px1uZ8sVm2ZInsx0i45aa7bnsAIznvgdT4GYYk2wbr6cAhn7wFdvph4eVssrgm0-tz-wM2X3xDJN3Py0b--q_gccletF3MM49J9YwToNusuIpn_u5z69DEXpNDnkPfUIFhJzigjFNZQYUCxm0R1wgsGo2NzKAGvM3FAf_YJPv8JQebWMuAP2LvJj81ZN7HkNuuxJPgKewxRt48REFBasqDPosg7AwPTfEF5I1u0NRDBtrfUaJMz5D_f5rlcaO-Rtka1b3_n6y4FY4YC3YLsFuujEaLl0dU7InWk5fzphBEC71kTbQScXXLbAADVhnvIJL-y7DPCSAXJsg6NEEKId7TRjb0mDj3BglOBE43MiALJ9ctNTGw5wdYq7qso6r5bHSJGv3qX6_tY0LsdkuiEYPsnhE20"
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
      <button onClick={() => register(registration)}>Register</button>
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
