import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { BooksURL } from "../../../core-utils/properties";
import { bookMarkBook } from "../../../service-layer";
import SearchResultCard from "../../molecules/searchResultCard";
import { useGlobalBookmarkState } from "../bookDetails/index";

const BookList = () => {
  const [bookmarks, setBookmarks] = useGlobalBookmarkState();

  const [bookData, setBookData] = useState([
    {
      id: 0,
      title: "",
      author: "",
      authorImg: "",
      bookImage: "",
      category: "",
      rating: 0,
      bookDesc: "",
      authorDesc: "",
      reviewsCount: 0,
      releaseDate: "",
      language: "",
      followersCount: 0,
      isStartRead: false,
      isBookmarked: false,
      type: {
        recommendations: false,
        PeopleYouareFollowingAlsoRead: false,
        TopRatings: false,
      },
    },
  ]);

  const addBookmarks = useCallback(
    (id: number) => {
      setBookmarks([...bookmarks, id]);
    },
    [bookmarks, setBookmarks]
  );

  const handleBookMarkClick = (id: number) => {
    if (bookmarks.indexOf(id) <= -1 || bookmarks.length == 0) {
      addBookmarks(id);
      bookMarkBook(id);
    }
  };

  const handleClick = () => {
    //  navigate('/book_detail', {state: {bookId: id}})
  };

  useEffect(() => {
    const data = async () => {
      // const searchedRes = await axios.get(`${BooksURL}/BookDetail`);
      const searchedRes = await axios.get("http://localhost:7075/searchedData");
      setBookData(searchedRes.data);
    };
    data();
  }, []);

  console.log(bookData);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {bookData
        .filter((books) => !books.isBookmarked)
        .map((book, key) => {
          return (
            <SearchResultCard
              key={key}
              id={book.id}
              bookImg={book.bookImage}
              authorAvtar={book.authorImg}
              authorName={book.author}
              bookName={book.title}
              bookDescription={book.bookDesc}
              category={book.category}
              rating={book.rating}
              peopleRated={book.rating}
              bookmarkClick={() => handleBookMarkClick(book.id)}
              onClick={handleClick}
            />
          );
        })}
    </Box>
  );
};

export default BookList;
