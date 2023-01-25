import React from "react";
import { render } from "@testing-library/react";
import PrivateLessonList from "./private-lesson-list";

test("should render PrivateLessonList", () => {
  const { getByText } = render(<PrivateLessonList />);

  expect(getByText("")).toBeInTheDocument();
});
