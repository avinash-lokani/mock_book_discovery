import * as React from 'react';
import { render, screen } from "@testing-library/react";
import BookDescription from ".";
import book1 from "../../../../public/assets/images/book1.png";

test("should render pagination", () => {
    render(<BookDescription bookImg={book1} bookTitle={'Super Simple Biology'} bookAuthor={'By D K Hudson'} bookCategory={'Humorous'}/>);
    expect(screen.getByText("Super Simple Biology")).toBeInTheDocument();
    expect(screen.getByText("By D K Hudson")).toBeInTheDocument();
    expect(screen.getByText("Catergory - Humorous")).toBeInTheDocument();
});