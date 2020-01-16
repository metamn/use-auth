import React from "react";
import useAuth from "./useAuth";
import ApiDoc from "./useAuth.md";

export default {
  component: useAuth,
  title: "useAuth",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useAuth />;
