import React from "react";
import Log from "./Log";
import ApiDoc from "./Log.md";

export default {
  component: Log,
  title: "Log",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Log />;
