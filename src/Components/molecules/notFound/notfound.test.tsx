import { render, screen } from "@testing-library/react";
import NotFoundComponent from ".";
import React from "react";

describe("not Found component", () => {
  test("render text notfound", () => {
    // eslint-disable-next-line react/no-children-prop
    render(<NotFoundComponent placeholder="Book not found" />);
    const NotfoundComponent = screen.getByText("Book not found");
    expect(NotfoundComponent).toBeInTheDocument();
  });
});