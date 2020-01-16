import React from "react";
import { render } from "@testing-library/react";
import useAuth from "./useAuth";

it("has a useAuth component", () => {
  const { getByText } = render(<useAuth />);
  expect(getByText("useAuth")).toBeInTheDocument();
});
