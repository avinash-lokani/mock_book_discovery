import * as React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from '.';

test("should render search results",() => {
    render(<SearchResults/>)

    const results = screen.getByText(/Search Results/i);
    expect(results).toBeInTheDocument();

    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument();

    const library = screen.getByText(/MyLibrary/i);
    expect(library).toBeInTheDocument();
})