import * as React from 'react';
import { render, screen } from "@testing-library/react";
import AlsoRead from ".";
import book1 from "./../../../../public/assets/images/alsoread1.png";

test("should render pagination", () => {
    render(<AlsoRead 
        bookImg={book1} 
        bookName={'Inorganic Chemistry'} 
        category={'Chemistry'} 
        rating={'4.5'} 
        peopleRated={830}/>);
    expect(screen.getByText("Inorganic Chemistry")).toBeInTheDocument();
    expect(screen.getByText("Category - Chemistry")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
});