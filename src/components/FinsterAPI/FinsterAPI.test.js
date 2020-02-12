import React from "react";
import { render } from "@testing-library/react";
import FinsterAPI from "./FinsterAPI";

it("has a FinsterAPI component", () => {
  const { getByText } = render(<FinsterAPI />);
  expect(getByText("FinsterAPI")).toBeInTheDocument();
});
