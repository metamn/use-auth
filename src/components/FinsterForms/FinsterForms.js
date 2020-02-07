import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import FinsterFormsLogin from "../FinsterFormsLogin";
import FinsterFormsRegister from "../FinsterFormsRegister";

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
const FinsterForms = props => {
  const { path, url } = useRouteMatch();

  return (
    <div className="FinsterForms">
      <h3>Forms (dynamic props)</h3>

      <ul>
        <li>
          <Link to={`${url}/login`}>Login</Link>
        </li>
        <li>
          <Link to={`${url}/register`}>Register</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          xxx
        </Route>
        <Route path={`${path}/login`}>
          <FinsterFormsLogin />
        </Route>
        <Route path={`${path}/register`}>
          <GoogleReCaptchaProvider reCaptchaKey="6Lef3MEUAAAAAEBgmgSa4i6a4Napq2iD32qS4DrG">
            <FinsterFormsRegister />
          </GoogleReCaptchaProvider>
        </Route>
      </Switch>
    </div>
  );
};

FinsterForms.propTypes = propTypes;
FinsterForms.defaultProps = defaultProps;

export default FinsterForms;
export {
  propTypes as FinsterFormsPropTypes,
  defaultProps as FinsterFormsDefaultProps
};
