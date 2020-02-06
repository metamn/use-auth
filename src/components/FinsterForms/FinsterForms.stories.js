import React from "react";
import FinsterForms from "./FinsterForms";
import ApiDoc from "./FinsterForms.md";

export default {
  component: FinsterForms,
  title: "FinsterForms",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterForms />;
