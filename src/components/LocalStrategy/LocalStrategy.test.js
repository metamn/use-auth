import React from "react";
import { render } from "@testing-library/react";
import LocalStrategy from "./LocalStrategy";

it("has a LocalStrategy component", () => {
  const { getByText } = render(<LocalStrategy />);
  expect(getByText("LocalStrategy")).toBeInTheDocument();
});
