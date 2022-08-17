import { render, screen } from "@testing-library/react";
import BannerComponent from ".";
import React from "react";

describe("not Found component", () => {
  test("render text notfound", () => {
    // eslint-disable-next-line react/no-children-prop
    render(<BannerComponent style={{ height: "250px", width: "330px" }} />);
    const BannerComponents = screen.getByText("Discover Books");
    expect(BannerComponents).toBeInTheDocument();
  });
});
