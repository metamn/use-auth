import React from "react";
import { render } from "@testing-library/react";
import useAuthStrategyLocal from "./useAuthStrategyLocal";

it("has a useAuthStrategyLocal component", () => {
  const { getByText } = render(<useAuthStrategyLocal />);
  expect(getByText("useAuthStrategyLocal")).toBeInTheDocument();
});
