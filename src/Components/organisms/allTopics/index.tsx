import React, { useEffect, useState } from "react";
import { Box, Tabs, Typography, Tab } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import listData from "../../../../Data/allTopicsList";
import {
  Authors,
  AllTopics,
  RecentTitles,
  Popular,
} from "../../../../public/assets/Icons";
import theme from "../../../core-utils/theme";
import { useNavigate } from "react-router-dom";
import TabsBarData from "../../molecules/tabsBarData";
import {BookDataProp} from "../bookCards"
import { BooksURL } from "../../../core-utils/properties";
import axios from "axios";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AllTopic = () => {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const [bookData, setBookData] = useState<BookDataProp[]>([]);
  const [searchRes, setSearchRes] = useState<BookDataProp[]>([]);

  useEffect(() => {
    const dataFun = async() => {
      const res = await axios.get(`${BooksURL}/BookDetail`);
      const allData = res.data;
      setBookData(allData);
    }
    dataFun();
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const search = (val: string, books: any) => {
    const searchResults = books.filter((book: BookDataProp) => {
      const dataFilter: string = book?.author?.toLowerCase();
      const bookFilter: string = book?.title?.toLowerCase();
      const categoryFilter: string = book?.category?.toLowerCase();

      return (
        dataFilter?.includes(val.toLowerCase()) ||
        bookFilter?.includes(val.toLowerCase()) ||
        categoryFilter?.includes(val.toLowerCase())
      );
    });
    return searchResults;
  };

  const handleClick = (id: string) => {
    
    const arr = listData.filter((el) => {
      return el.id === id;
    })

    const inp = arr[0].subject.split(" ")[0];
    const res = search(inp, bookData);
    setSearchRes(res);
    navigate("/searchresults", {
      state: {
        data: searchRes ,
        input:  inp ,
      },
    })
  };

  const classes = useStyles();
  return (
    <Box sx={{ width: "90%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="basic tabs example"
        >
          <Tab
            icon={
              <AllTopics
                style={{ width: theme.spacing(4), height: theme.spacing(4) }}
              />
            }
            iconPosition="start"
            className={classes.body1}
            label="All Topics"
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <Authors
                style={{ width: theme.spacing(4.5), height: theme.spacing(4) }}
              />
            }
            iconPosition="start"
            className={classes.body1}
            label="Authors"
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <RecentTitles
                style={{ width: theme.spacing(5), height: theme.spacing(4) }}
              />
            }
            iconPosition="start"
            className={classes.body1}
            label="Recent titles"
            {...a11yProps(2)}
          />
          <Tab
            icon={
              <Popular
                style={{ width: theme.spacing(5), height: theme.spacing(5) }}
              />
            }
            iconPosition="start"
            className={classes.body1}
            label="Popular titles"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabsBarData handleClick={handleClick} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default AllTopic;