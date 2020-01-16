import React from "react";
import { render } from "@testing-library/react";
import Log from "./Log";

it("has a Log component", () => {
  const { getByText } = render(<Log />);
  expect(getByText("Log")).toBeInTheDocument();
});
