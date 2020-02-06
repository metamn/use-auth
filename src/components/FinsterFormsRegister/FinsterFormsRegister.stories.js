import React from "react";
import FinsterFormsRegister from "./FinsterFormsRegister";
import ApiDoc from "./FinsterFormsRegister.md";

export default {
  component: FinsterFormsRegister,
  title: "FinsterFormsRegister",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterFormsRegister />;
