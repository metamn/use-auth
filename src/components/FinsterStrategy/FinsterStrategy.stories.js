import React from "react";
import FinsterStrategy from "./FinsterStrategy";
import ApiDoc from "./FinsterStrategy.md";

export default {
  component: FinsterStrategy,
  title: "FinsterStrategy",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterStrategy />;
