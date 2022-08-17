/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Lists from "../list/index";
import listData from "../../../../Data/allTopicsList";
import theme from "../../../core-utils/theme";

const useStyles = makeStyles({
  body1: {
    fontWeight: 600,
    fontSize: theme.spacing(3.5),
    lineHeight: theme.spacing(5.5),
  },
  listBox: {
    display: "flex",
    padding: `0px ${theme.spacing(10.5)}`,
  },
});

const TabsBarData = (handleClick: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.listBox}>
      <Grid container spacing={2}>
        {listData.map((data, key) => {
          return (
            <>
              <Grid item xs={4}>
                <Lists
                  data-testid="list"
                  key={key}
                  icon={data.icon}
                  Subject={data.subject}
                  topic_1={data.topic1}
                  topic_2={data.topic2}
                  topic_3={data.topic3}
                  topic_4={data.topic4}
                  onClick={() => handleClick(data.id)}
                  iconStyle={{
                    color: `${data.color}`,
                    margin: theme.spacing(1.25),
                    height: theme.spacing(6),
                    width: theme.spacing(6),
                  }}
                  style={{
                    backgroundColor: `${data.bColor}`,
                    height: theme.spacing(9),
                    width: theme.spacing(9),
                  }}
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TabsBarData;
