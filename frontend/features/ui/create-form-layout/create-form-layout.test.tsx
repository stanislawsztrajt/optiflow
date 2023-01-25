import React from "react";
import { render } from "@testing-library/react";
import FormLayout from "./form-layout";

test("should render FormLayout", () => {
  const { getByText } = render(<FormLayout />);

  expect(getByText("")).toBeInTheDocument();
});
