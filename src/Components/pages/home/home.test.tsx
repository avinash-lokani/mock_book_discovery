import * as React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from '.';

test("should render HomePage",() => {
    render(<HomePage />)

    const readBooks = screen.getByText(/Books You are Reading/i);
    expect(readBooks).toBeInTheDocument();

    const people = screen.getByText(/People You are Following Also Read/i);
    expect(people).toBeInTheDocument();

    const topics = screen.getByText(/Topics You Follow/i);
    expect(topics).toBeInTheDocument();

    const top = screen.getByText(/Top Ratings/i);
    expect(top).toBeInTheDocument();
})