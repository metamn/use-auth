import React from "react";
import { render } from "@testing-library/react";
import useAuthStrategyTokenFinster from "./useAuthStrategyTokenFinster";

it("has a useAuthStrategyTokenFinster component", () => {
  const { getByText } = render(<useAuthStrategyTokenFinster />);
  expect(getByText("useAuthStrategyTokenFinster")).toBeInTheDocument();
});
