import React from "react";
import { render } from "@testing-library/react";
import BookItem from "./book-item";

test("should render BookItem", () => {
  const { getByText } = render(<BookItem />);

  expect(getByText("")).toBeInTheDocument();
});
