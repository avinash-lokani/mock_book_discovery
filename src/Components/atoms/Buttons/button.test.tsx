import { fireEvent, render, screen } from "@testing-library/react";
import ButtonComponent  from ".";
import React from "react";

describe("button component", () => {
    test("render text button", () => {

      const handleClick = jest.fn();

        render(<ButtonComponent variant="outlined" color="inherit" onClick={handleClick} />);
        const buttonElement = screen.getByRole("button");

        fireEvent.click(buttonElement);
        expect(handleClick).toBeCalled();

        expect(buttonElement).toBeInTheDocument();
      });
})



