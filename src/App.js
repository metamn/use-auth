import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AuthProvider } from "./hooks";

//import DefaultStrategy from "./components/DefaultStrategy";
//import LocalStrategy from "./components/LocalStrategy";
//import ReqresStrategy from "./components/ReqresStrategy";
//import FinsterStrategy from "./components/FinsterStrategy";
//import FinsterForms from "./components/FinsterForms";
//import FinsterProtected from "./components/FinsterProtected";

const App = () => {
  return (
    <AuthProvider strategy="finsterAPI">
      <h3>With use-api</h3>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
