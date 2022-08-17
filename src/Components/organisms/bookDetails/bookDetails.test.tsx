import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookDetails from ".";

test("should render book image and author image and bookmark click", () => {
  render(<BookDetails id={1} />);

  const footer = screen.getByTestId("footer");
  const button = screen.getByTestId("button");

  fireEvent.click(button);
  expect(button).toHaveTextContent("Start Reading");

  expect(footer).toBeInTheDocument();
  expect(screen.getByTestId("title")).toBeInTheDocument();
  expect(screen.getByTestId("author")).toBeInTheDocument();
  expect(screen.getByTestId("rating")).toBeInTheDocument();
  expect(screen.getByTestId("date")).toBeInTheDocument();
  expect(screen.getByTestId("lang")).toBeInTheDocument();
});
