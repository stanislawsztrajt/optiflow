import React from "react";
import { render } from "@testing-library/react";
import Loading from "./loading";

test("should render Loading", () => {
  const { getByText } = render(<Loading />);

  expect(getByText("")).toBeInTheDocument();
});
