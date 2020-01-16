import React from "react";
import authStrategyLocal from "./authStrategyLocal";
import ApiDoc from "./authStrategyLocal.md";

export default {
  component: authStrategyLocal,
  title: "authStrategyLocal",
  parameters: { notes: ApiDoc }
};

export const Default = () => <authStrategyLocal />;
