import React from "react";
import { render } from "@testing-library/react";
import DefaultStrategy from "./DefaultStrategy";

it("has a DefaultStrategy component", () => {
  const { getByText } = render(<DefaultStrategy />);
  expect(getByText("DefaultStrategy")).toBeInTheDocument();
});
