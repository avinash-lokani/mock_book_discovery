import React, { useState } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "../../../../public/assets/icons/search.svg";
import theme from "../../../core-utils/theme";
import SearchResult from "../../molecules/searchResult";
import { useNavigate } from "react-router-dom";
import NotfoundComponent from "../../molecules/notFound";

type BookProps = {
  id: number;
  title: string;
  author: string;
  authorImg: string;
  bookImage: string;
  category: string;
  rating: number;
  bookDescription: string;
  bookDesc: string;
  authorDesc: string;
  reviewsCount: number;
  releaseDate: string;
  language: string;
  followersCount: number;
  isStartRead: boolean;
  isBookmarked: boolean;
  type: {
    recommendations: boolean;
    PeopleYouareFollowingAlsoRead: boolean;
    TopRatings: boolean;
  };
};

export interface SearchProps {
  placeholder: string;
  BookData: Array<BookProps>;
  bookName?: string;
  topicSearch ?: string;
}

const SearchBar = (props: SearchProps) => {
  const [findTitle, setTitle] = useState<string>("");

  const [slicedSearchResults, setSlicedSearchResults] = useState<BookProps[]>(
    []
  );

  const [bookData, setBookData] = useState<BookProps[]>([
    {
      id: 0,
      title: "",
      author: "",
      authorImg: "",
      bookImage: "",
      category: "",
      rating: 0,
      bookDescription: "",
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

  const search = (val: string, books: any) => {
    setTitle(val);
    const searchResults = books.filter((book: BookProps) => {
      const dataFilter: string = book?.author?.toLowerCase();
      const bookFilter: string = book?.title?.toLowerCase();
      const categoryFilter: string = book?.category?.toLowerCase();

      return (
        dataFilter?.includes(findTitle.toLowerCase()) ||
        bookFilter?.includes(findTitle.toLowerCase()) ||
        categoryFilter?.includes(findTitle.toLowerCase())
      );
    });

    setSlicedSearchResults(searchResults.slice(0, 4));
    return searchResults;
  };

  const handleChange = async (e: any) => {
    const val = e.target.value;
    const books = search(val, props.BookData);
    setBookData(books);
  };

  const navigate = useNavigate();
  //console.log(bookData); ------------> working

  return (
    <>
      <TextField
        data-testid="textfield"
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e)}
        sx={{
          color: `${theme.palette.primary.main}`,
          width: "100%",
          lineHeight: "42px",
          height: "42px",
          stroke: "grey.50",
          [` & fieldset`]: {
            borderRadius: 2,
          },
          "& .MuiInputBase-root": {
            height: "42px",
            backgroundColor: `${theme.palette.info.main}`,
            borderRadius: 2,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                marginLeft: "0px",
                paddingLeft: "0px",
                zIndex: 10,
              }}
            >
              <img role="searchicon" src={SearchIcon} />
            </InputAdornment>
          ),
        }}
      ></TextField>
      
      <Box>
        {findTitle.length > 1 ? (
          bookData.length > 0 ? (
            <SearchResult
              results={slicedSearchResults}
              handleSeeMore={() =>
                navigate("/searchresults", {
                  state: {
                    data: bookData ,
                    input:  findTitle ,
                  },
                })
              }
            />
          ) : (
            <NotfoundComponent
              placeholder={
                "No Results found. Please try a different search term"
              }
            />
          )
        ) : null}
      </Box>
    </>
  );
};

export default SearchBar;
