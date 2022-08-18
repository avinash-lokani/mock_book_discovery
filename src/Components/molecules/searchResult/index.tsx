import { Box, Divider, Paper } from "@mui/material";
import React from "react";
import theme from "../../../core-utils/theme";
import ButtonComponent from "../../atoms/Buttons/index";
import BookDescription from "../bookDescription/index";

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

export interface SearchResultProps {
  results: Array<BookProps>;
  handleSeeMore: () => void;
}

const SearchResult = (props: SearchResultProps) => {

  return (
    <Box sx={{zIndex : "999", background: "white", boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)", borderRadius: "5px", height:'500px', width:'37.4vw'}}>
      <>
       <div style={{height:'450px',overflowX:'hidden',overflowY:'scroll'}}>
       {props.results.map((books, key) => {
          return (
            <BookDescription
              key={key}
              bookImg={books.bookImage}
              bookTitle={books.title}
              bookAuthor={books.author}
              bookCategory={books.category}
            />
          );
        })}
       </div>
       <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
       <div>
        <Divider sx={{marginLeft:'24px',marginRight:'24px',color:`${theme.palette.grey[50]}`, widht:'35vw'}}/>
       <ButtonComponent
          role={"button"}
          color="secondary"
          style={{textTransform:'none',marginTop:'6px', width: '37.4vw', color:`${theme.palette.secondary.main}`}}
          onClick={props.handleSeeMore}
        >
          See all results
        </ButtonComponent>
       </div>
       </div>
      </>
    </Box>
  );
};

export default SearchResult;