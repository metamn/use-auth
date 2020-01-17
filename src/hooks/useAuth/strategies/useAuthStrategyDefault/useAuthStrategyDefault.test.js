import React from "react";
import { render } from "@testing-library/react";
import useAuthStrategyDefault from "./useAuthStrategyDefault";

it("has a useAuthStrategyDefault component", () => {
  const { getByText } = render(<useAuthStrategyDefault />);
  expect(getByText("useAuthStrategyDefault")).toBeInTheDocument();
});
