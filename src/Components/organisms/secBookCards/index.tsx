import { Typography, Box } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import chevron from "../../../../public/assets/icons/chevron.svg";
import Infocard from "../../molecules/card";
import { BooksURL } from "../../../core-utils/properties";
import { useGlobalBookmarkState } from "../bookDetails";
import axios from "axios";
import theme from "../../../core-utils/theme";
import { bookMarkBook } from "../../../service-layer";
import { useNavigate } from "react-router-dom";

const types = {
  recommendations: false,
  PeopleYouareFollowingAlsoRead: false,
  TopRatings: false,
};
interface CardGroupProps {
  filterType: keyof typeof types;
  heading?: string;
}

const CardGroup = (props: CardGroupProps) => {
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

 

  const [bookmarks, setBookmarks] = useGlobalBookmarkState();

  useEffect(() => {
    const data = async () => {
      // const searchedRes = await axios.get(`${BooksURL}/BookDetail`);
      const searchedRes = await axios.get("http://localhost:7075/BookDetail");
      setBookData(searchedRes.data);
    };

    data();
  }, []);

  const addBookmarks = useCallback(
    (id: number) => {
      setBookmarks([...bookmarks, id]);
      bookMarkBook(id);
    },
    [bookmarks, setBookmarks]
  );
  const navigate = useNavigate()
  const handleCardNavigate = (id:number)=>{
      navigate(`/books/${id}`)
  }

  return (
    <Box >
      <Box
        data-testid="recommendations-header"
        sx={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent:'space-between' }}
      >
        <Typography variant="h1" color="primary.dark">
          {props.heading}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            marginLeft: "auto",
            width: theme.spacing(22.5),
            color: "secondary.main",
            alignItems: "center",
          }}
        >
          See more <img style={{ height: theme.spacing(4) }} src={chevron} />{" "}
        </Typography>
      </Box>
      <Box
        data-testid="cards"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: theme.spacing(4),
          justifyContent: "space-between",
        }}
      >
        {bookData
          .filter((books) => books.type[props.filterType])
          .slice(0, 4)
          .map((cards, key) => {
            return (
              <Infocard
              onCardClick={()=>{handleCardNavigate(cards.id)}}
                key={key}
                imgSrc={cards.bookImage}
                iconclick={() => {
                  if (bookmarks.indexOf(key) <= -1 || bookmarks.length == 0) {
                    addBookmarks(key);
                  }
                }}
                bookName={cards.title}
                author={cards.author}
                category={cards.category}
                rating={cards.rating}
                ratingCount={cards.rating}
                style={{ width: theme.spacing(68.25), border: "none" }}
                isBookmarked={cards.isBookmarked}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default CardGroup;
