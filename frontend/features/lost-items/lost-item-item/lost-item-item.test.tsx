import React from "react";
import { render } from "@testing-library/react";
import LostItemItem from "./lost-item-item";

test("should render LostItemItem", () => {
  const { getByText } = render(<LostItemItem />);

  expect(getByText("")).toBeInTheDocument();
});
