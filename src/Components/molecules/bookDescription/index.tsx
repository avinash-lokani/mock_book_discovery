import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

interface BookDescriptionProps {
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    bookImg: string;
    bookTitle: string;
    bookAuthor: string;
    bookCategory: string;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "513px",
    padding: "15px"
  },
  bookInfoDiv: {
    display: "flex",
    flexDirection: "column",
    alignItem: "flex-start",
    padding: "15px"
  },
  imgDiv: {
    padding : "8px"
  }
})

const BookDescription = (props:BookDescriptionProps) => {
  const classes = useStyles();
    return(
      <Box className={classes.container} onClick={props.onClick}>
        <Box className= {classes.imgDiv}>
          <img src={props.bookImg} style={props.style}/>
        </Box>
        <Box>
          <Box className={classes.bookInfoDiv}>
            <Typography color="primary.dark" variant="subtitle1">
            {props.bookTitle}
            </Typography>
           <Typography color="primary.light" variant="body1">
           {props.bookAuthor}
           </Typography>
           <Typography color="primary.light" variant="body1">
           Catergory - {props.bookCategory}
           </Typography>
          </Box>
        </Box>
      </Box>
    )
}

export default BookDescription;
