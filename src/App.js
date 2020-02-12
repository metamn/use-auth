import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AuthProvider } from "./hooks";

//import DefaultStrategy from "./components/DefaultStrategy";
//import LocalStrategy from "./components/LocalStrategy";
//import ReqresStrategy from "./components/ReqresStrategy";
import FinsterStrategy from "./components/FinsterStrategy";
import FinsterForms from "./components/FinsterForms";
import FinsterProtected from "./components/FinsterProtected";

const App = () => {
  return (
    <AuthProvider strategy="finster">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/no-forms">No forms (wired in props)</Link>
          </li>
          <li>
            <Link to="/forms">Forms (dynamic props)</Link>
          </li>
          <li>
            <Link to="/protected">Protected area</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/no-forms">
            <FinsterStrategy />
          </Route>
          <Route path="/forms">
            <FinsterForms />
          </Route>
          <Route path="/protected">
            <FinsterProtected />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
