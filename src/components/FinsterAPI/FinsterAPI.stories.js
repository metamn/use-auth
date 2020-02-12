import React from "react";
import FinsterAPI from "./FinsterAPI";
import ApiDoc from "./FinsterAPI.md";

export default {
  component: FinsterAPI,
  title: "FinsterAPI",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterAPI />;
