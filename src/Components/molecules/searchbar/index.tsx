/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "../../../../public/assets/icons/search.svg";
import theme from "../../../core-utils/theme";

type BookProps = {
  id: number;
  title: string;
  author: string;
  authorImg: string;
  bookImage: string;
  category: string;
  rating: number;
  reviewsCount: number;
};

export interface SearchProps {
  placeholder: string;
  BookData: Array<BookProps>;
  bookName?: string;
}

const SearchBar = (props: SearchProps) => {
  const [count, setCount] = useState(0);
  const [bookData, setBookData] = useState([
    {
      id: 1,
      title: "",
      author: "",
      authorImg: "",
      bookImage: "",
      category: "",
      rating: 4.5,
      reviewsCount: 830,
    },
  ]);

  const search = (val: string, books: any) => {
    const filteredData = [];
    for (const element of books) {
      val = val.toLowerCase();
      const bookName = element.bookName.toLowerCase();
      const bookAuthor = element.authorName.toLowerCase();
      if (bookName.startsWith(val) || bookAuthor.startsWith(val)) {
        filteredData.push(element);
      }
    }
    return filteredData;
  };

  const handleChange = async (e: any) => {
    const val = e.target.value;
    if (count < 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    const books = search(val, props.BookData);
    setBookData(books);
  };

  return (
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
  );
};

export default SearchBar;
