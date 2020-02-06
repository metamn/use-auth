import React from "react";
import FinsterFormsLogin from "./FinsterFormsLogin";
import ApiDoc from "./FinsterFormsLogin.md";

export default {
  component: FinsterFormsLogin,
  title: "FinsterFormsLogin",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterFormsLogin />;
