import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import FollowReviews from "../../molecules/followReviews";
import BookDetails from "../../organisms/bookDetails";
import CardGroup from "../../organisms/secBookCards";
import chevron from "../../../../public/assets/icons/chevron.svg";
import AlsoRead from "../../molecules/alsoRead";
import theme from "../../../core-utils/theme";
import Review from "../../molecules/reviews";
import {
  authorBooks,
  batchmates_also_read,
  BookData,
  FollowersReview,
  followreviews,
  otherReviews,
  ReviewComments,
  seemore,
} from "../../../core-utils/messages";
interface BookPageDetailsProps {
  id: number;
}

const BookPageDetails = (props: BookPageDetailsProps) => {
  return (
    <Grid
      data-testid="body"
      sx={{ marginTop:'100px',width:'89vw',marginLeft:'70px',marginBottom: theme.spacing(25), textAlign:'left' }}
    >
      <Grid container>
        <Grid item xs={8} md={8}>
          <BookDetails id={props.id} />
        </Grid>

        <Grid item xs={4} md={4}  >
        <Grid container  >
          <Typography
            variant="subtitle1"
            color="primary.dark"
            marginLeft="202px"
          >
            {batchmates_also_read}
          </Typography>

          <Box
            sx={{
              marginTop: theme.spacing(4),
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {BookData.map((book, key) => {
              return (
               <Grid  key={key} item xs={12} sx={{marginLeft:'40px',paddingLeft:'150px'}}>
                 <AlsoRead
                  key={key}
                  bookName={book.bookName}
                  rating={"4.5"}
                  bookImg={book.Img}
                  category={"Chemistry"}
                  peopleRated={830}
                />
               </Grid>
              );
            })}
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "secondary.main",
              marginTop: theme.spacing(4.25),
              display: "flex",
              justifyContent: "center",
              marginLeft:'295px'
             
            }}
          >
            {seemore} <img style={{ height: "16px" }} src={chevron} />
          </Typography>
        </Grid>
        </Grid>
      </Grid>

      <Grid container xs={7} md={7}>
        <Grid
          item
          xs={12}
          md={12}
          data-testid="recommendations-header"
          sx={{
            display: "flex",
            width: "100%",
            marginTop: theme.spacing(14),
          }}
        >
          <Typography variant="subtitle1" color="primary.dark">
            {authorBooks}
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
            {seemore} <img style={{ height: "16px" }} src={chevron} />{" "}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {BookData.map((book, key) => {
            return (
              <AlsoRead
                key={key}
                bookName={book.bookName}
                rating={"4.5"}
                bookImg={book.Img}
                category={"Chemistry"}
                peopleRated={830}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid container xs={7} md={7}>
        <Box
          data-testid="Reviews-header"
          sx={{
            display: "flex",
            width: "100%",
            marginTop: theme.spacing(16.25),
          }}
        >
          <Typography variant="subtitle1" color="primary.dark">
            {followreviews}
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
            {seemore} <img style={{ height: "16px" }} src={chevron} />{" "}
          </Typography>
        </Box>
        <Grid
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: theme.spacing(4),
            flexWrap: "wrap",
          }}
        >
          {FollowersReview.map((review, key) => {
            return (
              <FollowReviews
                key={key}
                avatar={review.avatar}
                reviewerName={review.reviewerName}
                designation={review.designation}
                rating={review.rating}
                comment={review.comment}
              />
            );
          })}
        </Grid>
      </Grid>

      <Grid container xs={7} md={7}>
        <Box
          data-testid="Reviews-header"
          sx={{
            display: "flex",
            width: "100%",
            marginTop: theme.spacing(26.25),
            marginBottom: theme.spacing(4),
          }}
        >
          <Typography variant="subtitle1" color="primary.dark">
            {otherReviews}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              marginLeft: "auto",
              width: "90px",
              color: "secondary.main",
              alignItems: "center",
            }}
          >
            {seemore} <img style={{ height: "16px" }} src={chevron} />{" "}
          </Typography>
        </Box>

        <Grid xs={12} md={12}>
          {ReviewComments.map((review, key) => {
            return (
              <>
                <Review
                  key={key}
                  avatar={review.avatar}
                  reviewerName={review.reviewerName}
                  designation={review.designation}
                  rating={review.rating}
                  comment={review.comment}
                />
                <Divider
                  color={theme.palette.grey[50]}
                  sx={{
                    marginTop: theme.spacing(3),
                    marginBottom: theme.spacing(3),
                  }}
                />
              </>
            );
          })}
        </Grid>
      </Grid>
      <Box sx={{ marginTop: theme.spacing(16), width: "80%" }}>
        <CardGroup filterType={"recommendations"} heading={"Recommendations"}  />
      </Box>
    </Grid>
  );
};

export default BookPageDetails;