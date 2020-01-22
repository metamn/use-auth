import React from "react";
import { render } from "@testing-library/react";
import FinsterStrategy from "./FinsterStrategy";

it("has a FinsterStrategy component", () => {
  const { getByText } = render(<FinsterStrategy />);
  expect(getByText("FinsterStrategy")).toBeInTheDocument();
});
