import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import SearchResultCard from "../../molecules/searchResultCard";
import { SearchResult } from "../../../core-utils/messages/index";
import { BooksURL } from "../../../core-utils/properties";
import BookPagination from "../../molecules/Pagination";
import { useGlobalBookmarkState } from "../bookDetails/index";
import DropDown from "../../molecules/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import { bookMarkBook, unbookMarkBook } from "../../../service-layer";
import { useNavigate } from "react-router-dom";

interface BookDataProp {
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
}

interface BookCardsProps {
  title?: string;
  searchInput?: string;
  allBookData?: Array<BookDataProp>;
}

const useStyles = makeStyles(() => ({
  heading: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: theme.spacing(3.75),
  },
}));

const BookCards = (props: BookCardsProps) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const [bookmarks, setBookmarks] = useGlobalBookmarkState();
  const [bookData, setBookData] = useState([
    {
      id: 0,
      bookImg: "",
      authorAvtar: "",
      authorName: "",
      bookName: "",
      bookDescription: "",
      category: "",
      rating: 0,
      peopleRated: 0,
    },
  ]);

  const [totalBookData, setTotalBookData] = useState([
    {
      id: 0,
      bookImg: "",
      authorAvtar: "",
      authorName: "",
      bookName: "",
      bookDescription: "",
      category: "",
      rating: 0,
      peopleRated: 0,
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
    } else {
      unbookMarkBook(id);
    }
  };

  // const handleClick = (_id: number) => {
  //   navigate(`/books/${id}`)
  // };

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    currentPage: number
  ) => {
    setPage(currentPage);
  };

  useEffect(() => {
    const data = async () => {
      const bData = await axios.get("http://localhost:7075/searchedData");
      setTotalBookData(bData.data);
      const res = await axios.get(`http://localhost:7075/searchedData?_page=${page}`);
      const searchedRes = res.data;
      setBookData(searchedRes);
    };

    data();
  }, [page]);

  const totalPagination = (): number => {
    return Math.ceil(totalBookData.length / 10);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", marginTop:'100px'}}>
        <Box className={classes.heading}>
          <Box>
            <Typography
              data-testid="searchresult"
              variant="h1"
              sx={{ marginTop: theme.spacing(1.75) }}
            >
              {props.title ? props.title : SearchResult}
              {props.searchInput}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <DropDown
              style={{
                minWidth: theme.spacing(37.5),
                margin: theme.spacing(1.75),
              }}
              name={"Categories"}
            />
            <DropDown
              style={{
                minWidth: theme.spacing(27.5),
                margin: theme.spacing(1.75),
              }}
              name={"Sort by"}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {bookData.map((book, key) => {
            return (
              <>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <SearchResultCard
                    key={key}
                    id={book.id}
                    bookImg={book.bookImg}
                    authorAvtar={book.authorAvtar}
                    authorName={book.authorName}
                    bookName={book.bookName}
                    bookDescription={book.bookDescription}
                    category={book.category}
                    rating={book.rating}
                    peopleRated={book.peopleRated}
                    bookmarkClick={() => handleBookMarkClick(book.id)}
                    onClick={() => navigate(`/books/${book.id}`)}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
        <Box
          sx={{ display: "flex", float: "right", margin: theme.spacing(4.5) }}
        >
          <Box sx={{ margin: theme.spacing(2) }} component="span">
            1 to {bookData.length} of {totalBookData.length} results
          </Box>
          <BookPagination
            onClick={handlePagination}
            setPage={setPage}
            page={page}
            count={totalPagination()}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookCards;
