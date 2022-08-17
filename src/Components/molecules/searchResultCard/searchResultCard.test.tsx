import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import book from "./../../../../public/assets/images/book.png";
import avatar from "../../../../public/assets/images/jdlee.png";
import SearchResultCard from ".";

test("should render pagination", () => {
  const handleClick = jest.fn();
  const handleBookmarkClick = jest.fn();
  render(
    <SearchResultCard
      bookImg={book}
      authorAvtar={avatar}
      authorName={"J D Lee"}
      bookName={"Inorganic Chemistry"}
      bookDescription={
        "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
      }
      category={"Chemistry"}
      rating={4.5}
      peopleRated={830}
      onClick={handleClick}
      bookmarkClick={handleBookmarkClick}
      id={1}
    />
  );

  const bookmark = screen.getByTestId("bookmark");

  fireEvent.click(bookmark);

  expect(handleBookmarkClick).toBeCalled();

  const boxComp = screen.getByTestId("boxcomponent");

  fireEvent.click(boxComp);

  expect(handleClick).toBeCalled();

  expect(screen.getByText("Inorganic Chemistry")).toBeInTheDocument();
  expect(screen.getByText(4.5)).toBeInTheDocument();
});
