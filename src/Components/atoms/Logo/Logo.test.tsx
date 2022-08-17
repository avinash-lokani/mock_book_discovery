import * as React from 'react';
import { render, screen } from "@testing-library/react";
import BookLogo from ".";

test("should render logo", () => {
    render(<BookLogo/>);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
});