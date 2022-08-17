import { styled, Typography, Card } from "@mui/material";
import React from "react";
import { PageLeft, By, bookCategory } from "../../../core-utils/messages";
import theme from "../../../core-utils/theme";

type ReadingCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgSrc?: any;
  bookName: string;
  author: string;
  category: string;
  pagesRead: number;
  pagesTotal: number;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const CardBox = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const ImageBox = styled("div")({
  height: "85%",
  width: "35%",
  marginTop: "11px",
  marginLeft: "11px",
});

const TextBox = styled("div")({
  height: "85%",
  width: "60%",
  marginTop: "11px",
  marginLeft: "15px",
});

const ReadingCardComponent = (props: ReadingCardProps) => {
  return (
    <Card sx={{width: theme.spacing(68.25), padding: theme.spacing(2), marginRight: theme.spacing(2.5)}} onClick={props.onClick}>
      <CardBox sx={props.style}>
        <ImageBox>
          <img src={props.imgSrc}></img>
        </ImageBox>
        <TextBox>
          <Typography variant="body1">{props.bookName}</Typography>
          <Typography variant="caption" color="primary.light">
            {By} {props.author}
          </Typography>
          <br />
          <Typography variant="caption" color="primary.light">
            {bookCategory} {props.category}
          </Typography>
          <br />
          <br />
          <Typography variant="caption" color="primary.light">
            {props.pagesRead}/{props.pagesTotal} {PageLeft}
          </Typography>
        </TextBox>
      </CardBox>
    </Card>
  );
};

export default ReadingCardComponent;
