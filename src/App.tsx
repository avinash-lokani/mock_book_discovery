import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageStarter from "./Components/molecules/landingpage";
import BookPage from "./Components/pages/bookPage";
import HomePage from "./Components/pages/home";
import Library, {
  useGlobalBookmarkState,
  useGlobalReadState,
} from "./Components/pages/library";
import LandingTemplate from "./Components/templates/landingTemplate";
import theme from "./core-utils/theme";
import Books from "../Data/booksData";

export interface bookType {
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

function App() {
  const [, setCurrentRead] = useGlobalReadState();
  const [, setBookmarks] = useGlobalBookmarkState();

  const bookMarksIds = () => {
    const bookMarks = Books.filter(
      (book: bookType) => book.isBookmarked == true
    );
    const ids: number[] = [];
    bookMarks.map((book: bookType) => ids.push(book.id));
    setBookmarks(ids);
  };
  bookMarksIds();
  const startReadIds = () => {
    const startRead = Books.filter(
      (book: bookType) => book.isStartRead == true
    );
    const ids: number[] = [];
    startRead.map((book: bookType) => ids.push(book.id));
    setCurrentRead(ids);
  };
  startReadIds();

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/search"
          element={<LandingTemplate template={<LandingPageStarter />} />}
        />
        <Route path="/mylibrary" element={<Library />} />
        <Route path="/" element={<HomePage />} />
        <Route path={`/books/:id`} element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
