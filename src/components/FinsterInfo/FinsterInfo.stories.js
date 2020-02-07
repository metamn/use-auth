import React from "react";
import FinsterInfo from "./FinsterInfo";
import ApiDoc from "./FinsterInfo.md";

export default {
  component: FinsterInfo,
  title: "FinsterInfo",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterInfo />;
