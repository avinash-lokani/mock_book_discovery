import { render, screen } from "@testing-library/react";
import React from "react";
import BookPageDetails from ".";

test("should render header component and book page", () => {
  render(<BookPageDetails id={5} />);

  expect(screen.getByTestId("body")).toBeInTheDocument();
});
