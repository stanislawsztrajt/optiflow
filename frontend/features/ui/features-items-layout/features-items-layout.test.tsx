import React from "react";
import { render } from "@testing-library/react";
import FeaturesItemsLayout from "./features-items-layout";

test("should render FeaturesItemsLayout", () => {
  const { getByText } = render(<FeaturesItemsLayout />);

  expect(getByText("")).toBeInTheDocument();
});
