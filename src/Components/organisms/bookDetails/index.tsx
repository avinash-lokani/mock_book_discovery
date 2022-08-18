import { Box, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ButtonComponent from "../../atoms/Buttons";
import Icons from "../../atoms/icons";
import Share from "../../../../public/assets/icons/share.svg";
import Bookmark from "../../../../public/assets/icons/bookmark.svg";
import BookmarkYellow from "../../../../public/assets/icons/bookmarky.svg";
import {
  BooksURL,
  By,
  category,
  Language,
  ReleaseDate,
} from "../../../core-utils/messages/index";
import axios from "axios";
import { createGlobalState } from "react-use";
import theme from "../../../core-utils/theme";
import {
  bookMarkBook,
  startReadBook,
  unbookMarkBook,
  stopReadBook,
} from "../../../service-layer";

export interface BookDetailsProps {
  id: number;
}

export const useGlobalReadState = createGlobalState<number[]>([]);
export const useGlobalBookmarkState = createGlobalState<number[]>([]);
export const useGlobalBooksCompletedState = createGlobalState<number[]>([]);


const BookDetails = (props: BookDetailsProps) => {
  const [bookData, setBookData] = useState({
    id: 1,
    title: "",
    author: "",
    authorImg: "",
    bookImage: "",
    category: "",
    rating: 4.5,
    bookDescription: "",
    bookDesc: "",
    authorDesc: "",
    reviewsCount: 830,
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
  });

  const [isbookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    const myBookData = async (n: number) => {
      const result = await axios.get(`${BooksURL}/BookDetail/${n}`);
      const book = result.data;
      setIsBookmarked(book.isBookmarked)
      setBookData(book);
      const bookStatus = bookData.isStartRead
        ? "Stop Reading"
        : "Start Reading";
      setStartRead(bookStatus);
    };
    myBookData(props.id);
  }, [bookData.isStartRead, props.id]);
  

  const [currentRead, setCurrentRead] = useGlobalReadState();
  const [bookmarks, setBookmarks] = useGlobalBookmarkState();
 
  const readStatus= bookData.isStartRead? "Stop Reading":"Start Reading"
  const [startRead, setStartRead] = useState(readStatus);
  const [booksCompleted, setBooksCompleted] = useGlobalBooksCompletedState();

  const handleStartRead = () => {
    if (currentRead.indexOf(bookData.id) <= -1 || currentRead.length == 0) {
      addToRead(bookData.id);
      startReadBook(bookData.id);
      deleteFromComplete(bookData.id);
      setStartRead("Stop Reading");
    } else {
      addToComplete(bookData.id);
      deleteToRead(bookData.id);
      stopReadBook(bookData.id);
      setStartRead("Start Reading");
    }
  };

  const deleteFromComplete = useCallback(
    (id: number) => {
      const index = booksCompleted.indexOf(id);
      if (index !== -1) {
        booksCompleted.splice(index, 1);
      }
      setBooksCompleted(booksCompleted);
    },
    [booksCompleted, setBooksCompleted]
  );

  const addToComplete = useCallback(
    (id: number) => {
      setBooksCompleted([...booksCompleted, id]);
    },
    [booksCompleted, setBooksCompleted]
  );

  const deleteToRead = useCallback(
    (id: number) => {
      console.log(currentRead);
      const index = currentRead.indexOf(id);
      if (index !== -1) {
        currentRead.splice(index, 1);
      }
      setCurrentRead(currentRead);
    },
    [currentRead, setCurrentRead]
  );

  const addToRead = useCallback(
    (id: number) => {
      setCurrentRead([...currentRead, id]);
    },
    [currentRead, setCurrentRead]
  );

  const addBookmarks = useCallback(
    (id: number) => {
      setBookmarks([...bookmarks, id]);
    },
    [bookmarks, setBookmarks]
  );

  const handleBookmark = () => {
    setIsBookmarked(!isbookmarked)
    if (bookmarks.indexOf(bookData.id) <= -1 || bookmarks.length == 0) {
      addBookmarks(bookData.id);
      bookMarkBook(bookData.id);
    } else {
      unbookMarkBook(bookData.id);
    }
  };

  return (
    <Grid container xs={8} md={8}>
      <Grid item display="flex" sx={{ height: theme.spacing(75.25) }}>
        <Box>
          <img
            src={bookData.bookImage}
            style={{ height: "297px" }}
            alt="book image"
          />
        </Box>
        <Box sx={{ marginLeft: theme.spacing(6.25) }}>
          <Typography data-testid="title" variant="h1" color="primary.dark">
            {bookData.title}
          </Typography>
          <Typography
            data-testid="author"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {By}
            <Typography color="primary.main" variant="body1" component="span">
              {bookData.author}
            </Typography>
          </Typography>
          <Typography
            data-testid="category"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {category}
            <Typography color="primary.main" variant="body1" component="span">
              {bookData.category}
            </Typography>
          </Typography>
          <Typography
            data-testid="rating"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {bookData.rating}
          </Typography>
          <Typography
            data-testid="date"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {ReleaseDate}
            <Typography color="primary.main" variant="body1" component="span">
              {bookData.releaseDate}
            </Typography>
          </Typography>
          <Typography
            data-testid="lang"
            color="primary.light"
            marginTop={theme.spacing(1)}
          >
            {Language}
            <Typography color="primary.main" variant="body1" component="span">
              {bookData.language}
            </Typography>
          </Typography>
          <Box
            data-testid="footer"
            sx={{ marginTop: theme.spacing(22.5) }}
            display="flex"
          >
            <ButtonComponent
              data-testid="button"
              variant="contained"
              color="secondary"
              style={{
                backgroundColor: `${theme.palette.secondary.main}`,
                textTransform: "none",
                boxShadow: "none",
              }}
              onClick={handleStartRead}
            >
              {startRead}
            </ButtonComponent>
            <Icons
              icon={isbookmarked? BookmarkYellow : Bookmark}
              onClick={handleBookmark}
              style={{ marginLeft: theme.spacing(5.5) }}
            />
            <Icons icon={Share} style={{ marginLeft: theme.spacing(5.5) }} />
          </Box>
        </Box>
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(2.5) }}>
        <Box>
          <Typography variant="subtitle1" color="primary.dark">
            Book Description
          </Typography>
          <Typography
            color="primary.light"
            sx={{ marginTop: theme.spacing(2) }}
          >
            {bookData.bookDesc}
          </Typography>
        </Box>
        <Box sx={{ marginTop: theme.spacing(10) }}>
          <Typography variant="subtitle1" color="primary.dark">
            About Author
          </Typography>
          <Box display="flex" marginTop={theme.spacing(4)}>
            <img
              src={bookData.authorImg}
              alt="author image"
              style={{ height: theme.spacing(20), width: theme.spacing(20) }}
            />
            <div style={{ marginLeft: theme.spacing(6.25) }}>
              <Typography color="primary.dark">By {bookData.author}</Typography>
              <Typography color="primary.light" marginTop={theme.spacing(1)}>
                {bookData.followersCount} Followers
              </Typography>
              <ButtonComponent
                variant="outlined"
                style={{
                  color: `${theme.palette.secondary.main}`,
                  borderColor: `${theme.palette.secondary.main}`,
                  textTransform: "none",
                  marginTop: theme.spacing(1),
                }}
              >
                Following
              </ButtonComponent>
            </div>
          </Box>
          <Typography
            color="primary.light"
            sx={{ marginTop: theme.spacing(2) }}
          >
            {bookData.authorDesc}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookDetails;
