import React from "react";
import { render } from "@testing-library/react";
import FeaturesTabsLayout from "./features-tabs-layout";

test("should render FeaturesTabsLayout", () => {
  const { getByText } = render(<FeaturesTabsLayout />);

  expect(getByText("")).toBeInTheDocument();
});
