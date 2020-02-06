import React from "react";
import { render } from "@testing-library/react";
import FinsterFormsRegister from "./FinsterFormsRegister";

it("has a FinsterFormsRegister component", () => {
  const { getByText } = render(<FinsterFormsRegister />);
  expect(getByText("FinsterFormsRegister")).toBeInTheDocument();
});
