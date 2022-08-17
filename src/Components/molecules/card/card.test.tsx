import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Infocard from "./index";

describe("card test", () => {

  const handleClick = jest.fn();

  it("testing Book Banner", () => {
    render(
      <Infocard
        bookName="HG well"
        author="C well"
        category="chemistry"
        rating={4}
        ratingCount={1254}
        iconclick={handleClick}
      />
    );

    
    const heading1 = screen.getByText("HG well");
    expect(heading1).toBeInTheDocument();
  });
});
