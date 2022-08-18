import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../core-utils/colors";
import { bookCategory } from "../../../core-utils/messages/index";
import {
  Star as StarIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ShareOutlined as ShareOutlinedIcon,
} from "@mui/icons-material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from "../../../core-utils/theme";

interface SearchResultCardProps {
  className?: string;
  onClick: (id: number) => void;
  id: number;
  style?: React.CSSProperties;
  bookImg: string;
  authorAvtar: string;
  authorName: string;
  bookName: string;
  bookDescription: string;
  category: string;
  rating: number;
  peopleRated: number;
  bookmarkClick?: () => void;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "571px",
    height: "287px",
    padding: "24px",
    borderRadius: "8px",
    margin: "24px 0px",
    cursor: "pointer",
  },
  flexDiv: {
    display: "flex",
  },
  avtarStyle: {
    width: "38px",
    height: "38px",
  },
  bookNameStyle: {
    padding: "18px 18px 18px 0px",
  },
  commonStyle: {
    padding: "8px 0px",
    marginTop: "8px",
  },
  ratingStyle: {
    width: "16.94px",
    height: "16px",
    display: "flex",
    paddingTop: "39px",
  },
  authorDetail: {
    display: "flex",
    justifyContent: "space-between",
  },
  bookContentDiv: {
    paddingLeft: "44px",
  },
  authorDetailSubcontainer: {
    paddingLeft: "11.82px",
  },
  bookContentSubDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const SearchResultCard = (props: SearchResultCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <Box className={classes.flexDiv}>
        <img src={props.bookImg} style={{width:'151px',height:'165px'}}/>
      </Box>
      <Box className={classes.bookContentDiv}>
        <Box className={classes.authorDetail}>
          <Box className={classes.flexDiv}>
            <Box>
              <img className={classes.avtarStyle} src={props.authorAvtar} />
            </Box>
            <Box className={classes.authorDetailSubcontainer}>
              <Typography variant="body1" color="primary.dark">
                {props.authorName}
              </Typography>
              <Typography variant="caption" color="primary.light">
                Author
              </Typography>
            </Box>
          </Box>
          <Box>
          <MoreHorizIcon fontSize={"small"} style = {{color:`${theme.palette.secondary.light}`}}/>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            color="primary.main"
            className={classes.bookNameStyle}
          >
            {props.bookName}
          </Typography>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.commonStyle}
          >
            {props.bookDescription}
            <Box
              data-testid="boxcomponent"
              component="span"
              color="secondary.main"
              style={{ cursor: "pointer" }}
              onClick={() => props.onClick(props.id)}
            >
              See more
            </Box>
          </Typography>
          <br></br>
          <br></br>
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
                color: colors.RATING_ICON,
                height: "16px",
                width: "16px",
                position: "relative",
                bottom: "1px",
                left: "5px",
              }}
            />
          </Typography>
        </Box>
        <Box className={classes.bookContentSubDiv}>
          <Typography
            variant="caption"
            color="primary.light"
            className={classes.commonStyle}
          >
            {props.peopleRated} ratings
          </Typography>
          <Box>
            <BookmarkBorderIcon
              data-testid="bookmark"
              sx={{
                color: "secondary.light",
                height: "20px",
                width: "16px",
                paddingRight: "12px",
                cursor: "pointer",
              }}
              onClick={props.bookmarkClick}
            />
            <ShareOutlinedIcon
              sx={{ color: "secondary.light", height: "20px", width: "16px" }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SearchResultCard;
