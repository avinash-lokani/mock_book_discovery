import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import topicsYouFollow from "../../../../Data/topicsYouFollow";
import chevron from "../../../../public/assets/icons/chevron.svg";
import bookToRead from "../../../../public/assets/icons/bookstoread.svg";
import bookRead from "../../../../public/assets/icons/bookread.svg";
import check from "../../../../public/assets/icons/check.svg";
import targetsvg from "../../../../public/assets/icons/target.svg";
import bookImage from "../../../../public/assets/images/book.png";
import {
  useGlobalBookmarkState,
  useGlobalBooksCompletedState,
  useGlobalReadState,
} from "../bookDetails";
import {
  booksRead,
  booksToRead,
  BooksURL,
  currentRead,
  homeTitle1,
  homeTitle2,
  homeTitle3,
  homeTitle4,
  target,
} from "../../../core-utils/messages";
import ReadingCount from "../../molecules/readingCount";
import ReadingCardComponent from "../../molecules/bookReading";
import CardGroup from "../secBookCards";
import BannerComponent from "../../molecules/banner";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "100px",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px",
    textAlign: "left",
  },
  bannerDiv: {
    margin: `${theme.spacing(14)} 0px`,
    width: "100%",
  },
  countDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const HomePageDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [booksReadcount] = useGlobalReadState();
  const [booksToReadcount] = useGlobalBookmarkState();
  const [booksCompletedcount] = useGlobalBooksCompletedState();

  const [bookData, setBookData] = useState([
    {
      id: 0,
      title: "",
      author: "",
      authorImg: "",
      bookImage: "",
      bookThumbnail: "",
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

  const navigateBookDetail = (id: number) => {
    navigate(`/books/${id}`);
  };

  useEffect(() => {
    const data = async () => {
      const searchedRes = await axios.get(`${BooksURL}/BookDetail`);
      setBookData(searchedRes.data);
    };
    data();
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.bannerDiv}>
        <BannerComponent imgSrc={"https://i.ibb.co/yV41kd6/book-Shelf.png"} />
      </Box>
      <Box className={classes.countDiv}>
        <ReadingCount
          heading={currentRead}
          iconImg={bookRead}
          count={booksReadcount.length}
        />
        <ReadingCount
          heading={booksToRead}
          iconImg={bookToRead}
          count={booksToReadcount.length}
        />
        <ReadingCount
          heading={booksRead}
          iconImg={check}
          count={booksCompletedcount.length}
        />
        <ReadingCount heading={target} iconImg={targetsvg} count={100} />
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h1" color="primary.dark">
              {homeTitle1}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="secondary.main">
              See more
              <img style={{ height: theme.spacing(4) }} src={chevron} />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: theme.spacing(3.75),
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {bookData
            .filter((books) => books.isStartRead)
            .map((book, key) => {
              return (
                <ReadingCardComponent
                  key={key}
                  imgSrc={book.bookImage}
                  bookName={book.title}
                  author={book.author}
                  category={book.category}
                  pagesRead={20}
                  pagesTotal={250}
                  onClick={() => {
                    navigateBookDetail(book.id);
                  }}
                />
              );
            })}
        </Box>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <CardGroup
          filterType={"recommendations"}
          heading={"Recommendations"}
        ></CardGroup>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <CardGroup
          filterType={"PeopleYouareFollowingAlsoRead"}
          heading={homeTitle2}
        ></CardGroup>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h1" color="primary.dark">
              {homeTitle3}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="secondary.main">
              See more{" "}
              <img style={{ height: theme.spacing(4) }} src={chevron} />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: theme.spacing(3.75),
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {topicsYouFollow.map((book, key) => {
            return (
              <Box key={key} sx={{ marginRight: theme.spacing(5) }}>
                <Box>
                  <img src={book.img} />
                </Box>
                <Box>
                  <Typography>{book.val}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ marginTop: theme.spacing(26) }}>
        <CardGroup filterType={"TopRatings"} heading={homeTitle4}></CardGroup>
      </Box>
    </Box>
  );
};

export default HomePageDetail;
