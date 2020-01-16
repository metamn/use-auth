import React from "react";
import useAuthStrategyLocal from "./useAuthStrategyLocal";
import ApiDoc from "./useAuthStrategyLocal.md";

export default {
  component: useAuthStrategyLocal,
  title: "useAuthStrategyLocal",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useAuthStrategyLocal />;
