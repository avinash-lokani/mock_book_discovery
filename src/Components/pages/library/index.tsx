import axios from "axios";
import React, { useEffect, useState } from "react";
import { createGlobalState } from "react-use";
import { bookType } from "../../../App";
import { BooksURL } from "../../../core-utils/messages";
import LandingPageStarter from "../../molecules/landingpage";
import BookCards from "../../organisms/bookCards";
import LandingTemplate from "../../templates/landingTemplate";

export const useGlobalReadState = createGlobalState<number[]>([]);
export const useGlobalBookmarkState = createGlobalState<number[]>([]);
export const useGlobalBooksCompletedState = createGlobalState<number[]>([]);

const Library: React.FC = () => {
  const [library, setLibrary] = useState(true);
  const [bookData, setBookData] = useState([
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

  useEffect(() => {
    const data = async () => {
      const searchedRes = await axios.get(`${BooksURL}/BookDetail`);
      const filterData = searchedRes.data.filter((book:bookType) => book.isBookmarked == true || book.isStartRead == true);
      setBookData(filterData)
	  if (bookData.length !== 0) {
        setLibrary(false);
      }
    };
    data();
  }, []);

  return library ? (
    <LandingTemplate template={<LandingPageStarter />} />
  ) : (
    <LandingTemplate
      template={<BookCards title={"My Library"} allBookData={bookData} />}
    />
  );
};

export default Library;