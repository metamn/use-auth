import React from "react";
import { render } from "@testing-library/react";
import FinsterFormsLogin from "./FinsterFormsLogin";

it("has a FinsterFormsLogin component", () => {
  const { getByText } = render(<FinsterFormsLogin />);
  expect(getByText("FinsterFormsLogin")).toBeInTheDocument();
});
