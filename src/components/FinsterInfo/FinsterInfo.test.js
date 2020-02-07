import React from "react";
import { render } from "@testing-library/react";
import FinsterInfo from "./FinsterInfo";

it("has a FinsterInfo component", () => {
  const { getByText } = render(<FinsterInfo />);
  expect(getByText("FinsterInfo")).toBeInTheDocument();
});
