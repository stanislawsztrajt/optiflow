import React from "react";
import { render } from "@testing-library/react";
import FeaturesLayout from "./features-layout";

test("should render FeaturesLayout", () => {
  const { getByText } = render(<FeaturesLayout />);

  expect(getByText("")).toBeInTheDocument();
});
