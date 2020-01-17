import React from "react";
import DefaultStrategy from "./DefaultStrategy";
import ApiDoc from "./DefaultStrategy.md";

export default {
  component: DefaultStrategy,
  title: "DefaultStrategy",
  parameters: { notes: ApiDoc }
};

export const Default = () => <DefaultStrategy />;
