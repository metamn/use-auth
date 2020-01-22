import React from "react";

import { AuthProvider } from "./hooks";

//import DefaultStrategy from "./components/DefaultStrategy";
//import LocalStrategy from "./components/LocalStrategy";
//import FinsterStrategy from "./components/FinsterStrategy";
import ReqresStrategy from "./components/ReqresStrategy";

const App = () => {
  return (
    <AuthProvider strategy="reqres">
      <ReqresStrategy />
    </AuthProvider>
  );
};

export default App;
