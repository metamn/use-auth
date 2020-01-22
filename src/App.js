import React from "react";

import { AuthProvider } from "./hooks";

//import DefaultStrategy from "./components/DefaultStrategy";
//import LocalStrategy from "./components/LocalStrategy";
import FinsterStrategy from "./components/FinsterStrategy";

const App = () => {
  return (
    <AuthProvider strategy="finster">
      <FinsterStrategy />
    </AuthProvider>
  );
};

export default App;
