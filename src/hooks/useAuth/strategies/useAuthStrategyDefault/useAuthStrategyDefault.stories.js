import React from "react";
import useAuthStrategyDefault from "./useAuthStrategyDefault";
import ApiDoc from "./useAuthStrategyDefault.md";

export default {
  component: useAuthStrategyDefault,
  title: "useAuthStrategyDefault",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useAuthStrategyDefault />;
