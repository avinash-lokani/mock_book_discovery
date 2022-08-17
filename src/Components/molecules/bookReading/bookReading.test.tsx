import { render, screen } from "@testing-library/react";
import React from "react";
import ReadingBookComponent from "./index";

describe("Reading card test", () => {
  it("testing Book Banner", () => {
    render(
      <ReadingBookComponent
        bookName="HG well"
        author="C well"
        category="chemistry"
        pagesRead={45}
        pagesTotal={1254}
      />
    );

    const heading1 = screen.getByText("HG well");
    expect(heading1).toBeInTheDocument();
  });
});
