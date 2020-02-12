import React from "react";
import FinsterProtected from "./FinsterProtected";
import ApiDoc from "./FinsterProtected.md";

export default {
  component: FinsterProtected,
  title: "FinsterProtected",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterProtected />;
