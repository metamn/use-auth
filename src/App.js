import React from "react";

import { AuthProvider } from "./hooks";

import DefaultStrategy from "./components/DefaultStrategy";
import LocalStrategy from "./components/LocalStrategy";

const App = () => {
  return (
    <AuthProvider strategy="none">
      <DefaultStrategy />
    </AuthProvider>
  );
};

export default App;
