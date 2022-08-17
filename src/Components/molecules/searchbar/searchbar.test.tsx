import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchBar from ".";

test("should render search icon and textfield", () => {
    render(
        <SearchBar placeholder={"Search here by book title, author or ISBN"} BookData={[]} />
      );
      const placeholder = screen.getByPlaceholderText(
        "Search here by book title, author or ISBN"
      );
      const query = 'change';
      const search = screen.getByTestId("textfield");
      const searchicon = screen.getByRole("searchicon");
      expect(placeholder).toBeInTheDocument();
      expect(search).toBeInTheDocument();
      fireEvent.change(placeholder, { target: { value: query } });
      
      expect(searchicon).toBeInTheDocument();
});