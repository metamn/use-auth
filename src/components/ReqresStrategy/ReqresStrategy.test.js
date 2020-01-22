import React from "react";
import { render } from "@testing-library/react";
import ReqresStrategy from "./ReqresStrategy";

it("has a ReqresStrategy component", () => {
  const { getByText } = render(<ReqresStrategy />);
  expect(getByText("ReqresStrategy")).toBeInTheDocument();
});
