import React from "react";

import { AuthProvider } from "./hooks";

import Log from "./components/Log";

const App = () => {
  return (
    <AuthProvider strategy="none">
      <Log />
    </AuthProvider>
  );
};

export default App;
