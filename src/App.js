import React from "react";

import { AuthProvider } from "./hooks";

//import DefaultStrategy from "./components/DefaultStrategy";
import LocalStrategy from "./components/LocalStrategy";

const App = () => {
  return (
    <AuthProvider strategy="local">
      <LocalStrategy />
    </AuthProvider>
  );
};

export default App;
