import React from "react";
import { render } from "@testing-library/react";
import authStrategyLocal from "./authStrategyLocal";

it("has a authStrategyLocal component", () => {
  const { getByText } = render(<authStrategyLocal />);
  expect(getByText("authStrategyLocal")).toBeInTheDocument();
});
