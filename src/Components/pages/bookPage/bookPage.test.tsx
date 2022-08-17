import * as React from "react";
import { render, screen } from "@testing-library/react";
import BookPage from ".";

test("should render header component and book page", () => {
  render(<BookPage />);

  expect(screen.getByTestId("body")).toBeInTheDocument();
});
