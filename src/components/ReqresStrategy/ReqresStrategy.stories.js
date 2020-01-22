import React from "react";
import ReqresStrategy from "./ReqresStrategy";
import ApiDoc from "./ReqresStrategy.md";

export default {
  component: ReqresStrategy,
  title: "ReqresStrategy",
  parameters: { notes: ApiDoc }
};

export const Default = () => <ReqresStrategy />;
