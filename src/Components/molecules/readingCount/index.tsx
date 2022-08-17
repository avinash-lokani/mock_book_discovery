import * as React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../core-utils/theme";
import colors from "../../../core-utils/colors";
import Icons from "../../atoms/icons";

interface ReadingCountProps {
  heading: string;
  iconImg: string;
  count: number;
}

const useStyles = makeStyles(() => ({
  container: {
    width: theme.spacing(68.25),
    height: theme.spacing(26),
    background: colors.READ_COUNT_BG,
    borderRadius: theme.spacing(2),
    display: "flex",
    padding: theme.spacing(6),
    justifyContent: "space-evenly",
    alignItems: "center",
    boxSizing: "border-box",
    margin: theme.spacing(3)
  },
}));

const ReadingCount = (props: ReadingCountProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box sx={{margin: theme.spacing(5)}}>
        <Icons icon={props.iconImg} />
      </Box>
      <Box>
        <Typography
          variant="caption"
          color="primary.light"
          sx={{ marginTop: theme.spacing(9)}}
        >
          {props.heading}
        </Typography>
        <br></br>
        <Typography variant="h1" color="primary">
          {props.count}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReadingCount;
