import React from "react";
import { render } from "@testing-library/react";
import EventItem from "./event-item";

test("should render EventItem", () => {
  const { getByText } = render(<EventItem />);

  expect(getByText("")).toBeInTheDocument();
});
