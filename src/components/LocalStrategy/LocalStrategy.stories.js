import React from "react";
import LocalStrategy from "./LocalStrategy";
import ApiDoc from "./LocalStrategy.md";

export default {
  component: LocalStrategy,
  title: "LocalStrategy",
  parameters: { notes: ApiDoc }
};

export const Default = () => <LocalStrategy />;
