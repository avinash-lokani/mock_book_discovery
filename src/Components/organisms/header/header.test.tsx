import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from ".";
import React from "react";

describe("not Found component", () => {
  test("render text notfound", () => {
    // eslint-disable-next-line react/no-children-prop
    render(<HeaderComponent />);

    const search = screen.getByTestId("textfield");

    expect(search).toBeInTheDocument();
  });
});
