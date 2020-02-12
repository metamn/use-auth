import React from "react";
import { render } from "@testing-library/react";
import FinsterProtected from "./FinsterProtected";

it("has a FinsterProtected component", () => {
  const { getByText } = render(<FinsterProtected />);
  expect(getByText("FinsterProtected")).toBeInTheDocument();
});
