import { render, screen } from "@testing-library/react";
import React from "react";
import SearchResult from ".";
import BookDescription from "../bookDescription";
import book1 from "../../../../public/assets/images/book1.png";
import ButtonComponent from "../../atoms/Buttons";

test("should render book description list and button",() => {
    render(<SearchResult results={[<BookDescription key = {"1"} bookImg={book1} bookTitle={"Super Simple Biology"} bookAuthor={"By D K Hudson"} bookCategory={"Humorous"}/>]} />)
    render(<ButtonComponent variant="outlined" color="inherit">button</ButtonComponent>);
    expect(screen.getByText("Super Simple Biology")).toBeInTheDocument();
    expect(screen.getByText("By D K Hudson")).toBeInTheDocument();
    expect(screen.getByText("Catergory - Humorous")).toBeInTheDocument();
    expect(screen.getByText("button")).toBeInTheDocument();
})