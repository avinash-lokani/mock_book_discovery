import React from "react";
import { useParams } from "react-router-dom";
import BookPageDetails from "../../organisms/BookPageDetails";
import LandingTemplate from "../../templates/landingTemplate";

export interface BookProps {
  id: number;
}

 const BookPage = () => {
  const params = useParams();
  return (
    <LandingTemplate template={<BookPageDetails id={Number(params.id)} />} />
  );
};

export default BookPage;
