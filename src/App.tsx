import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPageStarter from "./Components/molecules/landingpage";
import BookPage from "./Components/pages/bookPage";
import HomePage from "./Components/pages/home";
import Library from "./Components/pages/library";
import LandingTemplate from "./Components/templates/landingTemplate";
import theme from "./core-utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/mylibrary"
            element={<LandingTemplate template={<LandingPageStarter />} />}
          />
          <Route path="/search" element={<Library />} />
          <Route path="/" element={<HomePage />} />
          <Route path={`/books/:id`} element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
