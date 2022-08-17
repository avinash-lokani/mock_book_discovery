import * as React from 'react';
import { render, screen } from "@testing-library/react";
import BookCards from '.';

test("should render BookCards",() => {

    render(
        <BookCards searchInput={'J D Lee'} />
    );
    expect(screen.getByTestId("searchresult")).toBeInTheDocument();
    expect(screen.getByText("Search Results for J D Lee")).toBeInTheDocument();
    
})