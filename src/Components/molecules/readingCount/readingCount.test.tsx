import * as React from 'react';
import { render, screen } from "@testing-library/react";
import booksread from "../../../../public/assets/icons/bookread.svg"
import ReadingCount from "."

test("should render ReadingCount",() => {
    render(<ReadingCount heading={'CURRENT READ'} iconImg={booksread} count={58} />)
    const reads = screen.getByText(/CURRENT READ/i);
    expect(reads).toBeInTheDocument();
});