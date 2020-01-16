import React from "react";

import { AuthProvider } from "./hooks";

import Log from "./components/Log";

const App = () => {
  return (
    <AuthProvider strategy="local">
      <Log />
    </AuthProvider>
  );
};

export default App;
