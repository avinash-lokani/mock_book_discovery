import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import dots from "../../../../public/assets/images/dots.png";
import {bookCategory} from "../../../core-utils/messages/index"
import {
  Star as StarIcon
} from "@mui/icons-material";
import theme from "../../../core-utils/theme";

interface AlsoReadProps {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  bookName: string;
  rating: string;
  bookImg: string;
  category: string;
  peopleRated: number;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "275px",
    height: "134px",
    padding: "8px",
    borderRadius: "8px",
    boxShadow: `0.5px 0.5px ${theme.palette.grey[100]}`,
    marginTop:theme.spacing(4),
  },
  flexDiv: {
    display: "flex",
  },
  bookNameStyle: {
    padding: "4px 4px 4px 0px",
  },
  commonStyle: {
    padding: "8px 0px",
  },
  ratingStyle: {
    width: "16.94px",
    height: "16px",
    display: "flex",
    padding: "8px 0px",
  },
  bookContentDiv: {
    paddingLeft: "8px",
  },
  bookContentSubDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  dotImgStyle: {
    width: "15px",
    height: "15px",
    position: "relative",
    top: "10px",
    cursor: "pointer"
  },
});

const AlsoRead = (props: AlsoReadProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} onClick={props.onClick}>
      <Box className={classes.flexDiv}>
        <img src={props.bookImg} />
      </Box>
      <Box className={classes.bookContentDiv}>
        <Box>
          <Box className={classes.bookContentSubDiv}>
              <Typography
                variant="subtitle2"
                color="primary.main"
                className={classes.bookNameStyle}
              >
                {props.bookName}
              </Typography>
            <Box>
              <img className={classes.dotImgStyle} src={dots} />
            </Box>
          </Box>
          <Typography
            variant="caption"
            color="primary.main"
            className={classes.commonStyle}
          >
            {bookCategory}
            {props.category}
          </Typography>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.ratingStyle}
          >
            {props.rating}
            <StarIcon
              sx={{
                color: "#FFB500",
                height: "12px",
                width: "12px",
                position: "relative",
                top: "2px",
                left: "5px",
              }}
            />
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.commonStyle}
          >
            {props.peopleRated} ratings
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default AlsoRead;
