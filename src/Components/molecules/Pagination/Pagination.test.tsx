import * as React from 'react';
import { render, screen } from "@testing-library/react";
import BookPagination from ".";

test("should render pagination", () => {

    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(<BookPagination onClick={function (event: React.ChangeEvent<unknown>, currentPage: number): void {
        throw new Error('Function not implemented.');
    } } />);

    expect(screen.getByRole("pagination")).toBeInTheDocument();
});