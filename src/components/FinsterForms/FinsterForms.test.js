import React from "react";
import { render } from "@testing-library/react";
import FinsterForms from "./FinsterForms";

it("has a FinsterForms component", () => {
  const { getByText } = render(<FinsterForms />);
  expect(getByText("FinsterForms")).toBeInTheDocument();
});
