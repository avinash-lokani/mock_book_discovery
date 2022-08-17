import { fireEvent, render, screen } from "@testing-library/react";
import Icons from ".";
import AllTopics from "../../../../public/assets/icons/alltopics.svg" ;
import Authors from "../../../../public/assets/icons/authors.svg";
import Bookmark from "../../../../public/assets/icons/bookmark.svg";
import React from "react";

//onclick

test("should render AllTopic icon", () => {
    const handleClick = jest.fn();
    render(<Icons icon = {AllTopics} onClick={handleClick} />)
    
    const icon = screen.getByRole("icon")

    fireEvent.click(icon);
    
    expect(handleClick).toBeCalled();
    expect(screen.getByRole("icon")).toBeInTheDocument();
})

test("should render Authors icon", () => {
    const handleClick = jest.fn();
    render(<Icons icon = {Authors} onClick={handleClick} />)
    
    const icon = screen.getByRole("icon")

    fireEvent.click(icon);
    
    expect(handleClick).toBeCalled();
    expect(screen.getByRole("icon")).toBeInTheDocument();
})
