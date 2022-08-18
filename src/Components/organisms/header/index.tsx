// import {
//   AppBar,
//   Grid,
//   Menu,
//   MenuItem,
//   styled,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import theme from "../../../core-utils/theme";
// import Icons from "../../atoms/icons";
// import BookLogo from "../../atoms/Logo";
// import SearchBar from "../../molecules/searchbar";
// import Avatar from "@mui/material/Avatar";
// import axios from "axios";
// import { SearchedDataURL } from "../../../core-utils/messages";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useNavigate } from "react-router-dom";
// import AllTopic from "../allTopics";
// import { Opacity } from "@mui/icons-material";

// const HeaderBox = styled("div")({
//   height: "68px",
//   paddingLeft: "7.46vw",
//   paddingRight: "7.46vw",
//   background: `linear-gradient(180deg, ${theme.palette.info.dark} 0%, ${theme.palette.success.main} 100%)`,
//   overflow: "hidden",
// });

// const HeadInner = styled(Grid)({
//   paddingTop: "9px",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// });

// const Logo = styled(BookLogo)({});

// const DropDownFrameActive = styled("div")({
//   height: "22px",
//   marginTop: "0px",
//   border: `1px solid ${theme.palette.info.main}`,
//   borderRadius: "2px",
//   display: "flex",
//   paddingBottom: "5px",
//   paddingLeft: "5px",
//   marginLeft: "26px",
// });

// const DropDownFrame = styled("div")({
//   height: "22px",
//   marginTop: "0px",
//   display: "flex",
//   paddingBottom: "5px",
//   paddingLeft: "5px",
//   marginLeft: "24px",
// });

// const HeaderComponent = () => {
//   const [exploreStatus, setExploreStatus] = useState<boolean>(false);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const navigate = useNavigate();
//   const [bookData, setBookData] = useState([
//     {
//       id: 1,
//       title: "",
//       author: "",
//       authorImg: "",
//       bookImage: "",
//       category: "",
//       rating: 4.5,
//       reviewsCount: 830,
//     },
//   ]);

//   useEffect(() => {
//     const myBookData = async () => {
//       const result = await axios.get(`${SearchedDataURL}/searchedData`);
//       const book = result.data;
//       console.log(book);
//       setBookData(book);
//     };
//     myBookData();
//   }, []);

//   console.log(bookData);

//   const [explore, setExplore] = useState(false);
//   const [exploreDrop, setExploreDrop] = useState(false);
//   const [mylibrary, setMylibrary] = useState(1);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//     setExploreStatus(true);
//     ExploreClick();
//   };
//   const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     setExplore(!explore);
//     setAnchorEl(event.currentTarget);
//     setExploreStatus(true);
//     ExploreClick();
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//     setExploreStatus(false);
//   };

//   const MylibraryClick = () => {
//     setMylibrary(1);
//     setExplore(false);
//     navigate("/mylibrary");
//   };
//   const ExploreClick = () => {
//     setExplore(!explore);
//     setExploreDrop(!exploreDrop);
//   };
//   return (
//     <AppBar elevation={0}>
//       <HeaderBox data-testid="headerbox">
//         <HeadInner container>
//           <Logo />
//           <Typography
//             sx={{ marginTop: "3.5px", marginLeft: "4rem" }}
//             color={`${theme.palette.info.main}`}
//             onClick={() => {
//               navigate("/");
//             }}
//           >
//             Home
//           </Typography>

//           {explore ? (
//             <>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   marginBottom: "-21px",
//                 }}
//               >
//                 <DropDownFrameActive onClick={handleDivClick}>
//                   <div
//                     style={{
//                       display: "flex",
//                       backgroundColor: "transparent",
//                       borderStyle: "none",
//                     }}
//                     id="categories-button"
//                     aria-controls={open ? "categories-menu" : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? "true" : undefined}
//                     data-testid="exploreButton"
//                   >
//                     <Typography
//                       sx={{ marginTop: "3.5px" }}
//                       color={`${theme.palette.info.main}`}
//                     >
//                       Explore
//                     </Typography>
//                     <ArrowDropDownIcon
//                       fontSize="small"
//                       sx={{ marginTop: "3.5px" }}
//                       htmlColor={`${theme.palette.info.main}`}
//                     ></ArrowDropDownIcon>
//                   </div>
//                 </DropDownFrameActive>
//                 <div>
//                   {exploreStatus ? (
//                     <img
//                       src={"https://i.ibb.co/1KQ3L4J/killo.png"}
//                       style={{ marginLeft: "45px", marginBottom: "-6px" }}
//                     />
//                   ) : (
//                     <img
//                       src={"https://i.ibb.co/1KQ3L4J/killo.png"}
//                       style={{
//                         marginLeft: "45px",
//                         marginBottom: "-6px",
//                         opacity: 0,
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//               <DropDownFrame
//                 sx={{ marginTop: "2px" }}
//                 onClick={() => MylibraryClick()}
//               >
//                 <Typography
//                   sx={{ marginTop: "1.5px" }}
//                   color={`${theme.palette.info.main}`}
//                 >
//                   MyLibrary
//                 </Typography>
//                 <ArrowDropDownIcon
//                   fontSize="small"
//                   sx={{ marginTop: "1.5px" }}
//                   htmlColor={`${theme.palette.info.main}`}
//                 ></ArrowDropDownIcon>
//               </DropDownFrame>
//             </>
//           ) : (
//             <>
//               <DropDownFrame data-testid="explore" onClick={handleDivClick}>
//                 <Typography
//                   sx={{ marginTop: "3.5px" }}
//                   color={`${theme.palette.info.main}`}
//                 >
//                   Explore
//                 </Typography>
//                 <ArrowDropDownIcon
//                   fontSize="small"
//                   sx={{ marginTop: "3.5px" }}
//                   htmlColor={`${theme.palette.info.main}`}
//                 ></ArrowDropDownIcon>
//               </DropDownFrame>
//               <DropDownFrameActive
//                 data-testid="library"
//                 onClick={() => MylibraryClick()}
//                 sx={{ marginTop: "2px" }}
//               >
//                 <Typography
//                   sx={{ marginTop: "1.5px" }}
//                   color={`${theme.palette.info.main}`}
//                 >
//                   MyLibrary
//                 </Typography>
//                 <ArrowDropDownIcon
//                   fontSize="small"
//                   sx={{ marginTop: "1.5px" }}
//                   htmlColor={`${theme.palette.info.main}`}
//                 ></ArrowDropDownIcon>
//               </DropDownFrameActive>
//             </>
//           )}

//           <div style={{ marginLeft: "2rem", width: "37.5vw" }}>
//             <SearchBar
//               placeholder={"Search here by book title, author or ISBN"}
//               BookData={bookData}
//             ></SearchBar>
//           </div>

//           <div style={{ marginLeft: "3rem", marginTop: "10px" }}>
//             {" "}
//             <Icons icon={"https://i.ibb.co/TW7SLjS/bell.png"}></Icons>
//           </div>

//           <div
//             style={{
//               marginLeft: "1.5rem",
//               marginRight: "10px",
//               marginTop: "10px",
//             }}
//           >
//             <Avatar
//               src={"https://i.ibb.co/sHxLBNb/profile.png"}
//               sx={{
//                 marginTop: "-3px",
//                 height: "40px",
//                 width: "40px",
//               }}
//             ></Avatar>
//           </div>
//         </HeadInner>
//         <Menu
//           id="categories-menu"
//           anchorReference="anchorPosition"
//           anchorPosition={{ top: 68, left: 960 }}
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "categories-button",
//           }}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "center",
//           }}
//           data-testid="menu"
//         >
//           <MenuItem onClick={handleClose} autoFocus={false} disableGutters style={{backgroundColor:'transparent'}}>
//             <AllTopic />
//           </MenuItem>
//         </Menu>
//       </HeaderBox>
//     </AppBar>
//   );
// };

// export default HeaderComponent;


import React, { useEffect, useState } from "react";
import {AppBar ,Grid ,Menu ,MenuItem ,styled ,Typography} from "@mui/material";
import theme from "../../../core-utils/theme";
import Icons from "../../atoms/icons";
import BookLogo from "../../atoms/Logo";
import SearchBar from "../searchbar";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { BooksURL } from "../../../core-utils/properties";
import AllTopic from "../allTopics";

const HeaderBox = styled("div")({
  height: "68px",
  paddingLeft: "7.46vw",
  paddingRight: "7.46vw",
  background: `linear-gradient(180deg, ${theme.palette.info.dark} 0%, ${theme.palette.success.main} 100%)`,
});

const HeadInner = styled(Grid)({
  paddingTop: "9px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Logo = styled(BookLogo)({});

const DropDownFrameActive = styled("div")({
  height: "22px",
  marginTop: "0px",
  border: `1px solid ${theme.palette.info.main}`,
  borderRadius: "2px",
  display: "flex",
  paddingBottom: "5px",
  paddingLeft: "5px",
  marginLeft: "26px",
});

const DropDownFrame = styled("div")({
  height: "22px",
  marginTop: "0px",
  display: "flex",
  paddingBottom: "5px",
  paddingLeft: "5px",
  marginLeft: "24px",
});

const HeaderComponent = () => {
  const [exploreStatus, setExploreStatus] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
  const [bookData, setBookData] = useState([
    {
      id: 0,
      title: "",
      author: "",
      authorImg: "",
      bookImage: "",
      category: "",
      rating: 0,
      bookDescription: "",
      bookDesc: "",
      authorDesc: "",
      reviewsCount: 0,
      releaseDate: "",
      language: "",
      followersCount: 0,
      isStartRead: false,
      isBookmarked: false,
      type: {
        recommendations: false,
        PeopleYouareFollowingAlsoRead: false,
        TopRatings: false,
      },
    },
  ]);

  useEffect(() => {
    const myBookData = async () => {
      const result = await axios.get(`${BooksURL}/BookDetail`);
      const book = result.data;
      setBookData(book);
    };
    myBookData();
  }, []);

  const [explore, setExplore] = useState(false);
    const [exploreDrop, setExploreDrop] = useState(false);
    const [mylibrary, setMylibrary] = useState(1);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setExploreStatus(true);
      ExploreClick();
    };
    const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setExplore(!explore);
      setAnchorEl(event.currentTarget);
      setExploreStatus(true);
      ExploreClick();
    };
    const handleClose = () => {
      setAnchorEl(null);
      setExploreStatus(false);
    };
  
    const MylibraryClick = () => {
      setMylibrary(1);
      setExplore(false);
      navigate("/mylibrary");
    };
    const ExploreClick = () => {
      setExplore(!explore);
      setExploreDrop(!exploreDrop);
    };

  return (
    <AppBar elevation={0}>
        <HeaderBox data-testid="headerbox">
          <HeadInner container>
            <Logo />
            <Typography
              sx={{ marginTop: "3.5px", marginLeft: "4rem" }}
              color={`${theme.palette.info.main}`}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Typography>
  
            {explore ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "-21px",
                  }}
                >
                  <DropDownFrameActive onClick={handleDivClick}>
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        borderStyle: "none",
                      }}
                      id="categories-button"
                      aria-controls={open ? "categories-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      data-testid="exploreButton"
                    >
                      <Typography
                        sx={{ marginTop: "3.5px" }}
                        color={`${theme.palette.info.main}`}
                      >
                        Explore
                      </Typography>
                      <ArrowDropDownIcon
                        fontSize="small"
                        sx={{ marginTop: "3.5px" }}
                        htmlColor={`${theme.palette.info.main}`}
                      ></ArrowDropDownIcon>
                    </div>
                  </DropDownFrameActive>
                  <div>
                    {exploreStatus ? (
                      <img
                        src={"https://i.ibb.co/1KQ3L4J/killo.png"}
                        style={{ marginLeft: "45px", marginBottom: "-6px" }}
                      />
                    ) : (
                      <img
                        src={"https://i.ibb.co/1KQ3L4J/killo.png"}
                        style={{
                          marginLeft: "45px",
                          marginBottom: "-6px",
                          opacity: 0,
                        }}
                      />
                    )}
                  </div>
                </div>
                <DropDownFrame
                  sx={{ marginTop: "2px" }}
                  onClick={() => MylibraryClick()}
                >
                  <Typography
                    sx={{ marginTop: "1.5px" }}
                    color={`${theme.palette.info.main}`}
                  >
                    MyLibrary
                  </Typography>
                  <ArrowDropDownIcon
                    fontSize="small"
                    sx={{ marginTop: "1.5px" }}
                    htmlColor={`${theme.palette.info.main}`}
                  ></ArrowDropDownIcon>
                </DropDownFrame>
              </>
            ) : (
              <>
                <DropDownFrame data-testid="explore" onClick={handleDivClick}>
                  <Typography
                    sx={{ marginTop: "3.5px" }}
                    color={`${theme.palette.info.main}`}
                  >
                    Explore
                  </Typography>
                  <ArrowDropDownIcon
                    fontSize="small"
                    sx={{ marginTop: "3.5px" }}
                    htmlColor={`${theme.palette.info.main}`}
                  ></ArrowDropDownIcon>
                </DropDownFrame>
                <DropDownFrameActive
                  data-testid="library"
                  onClick={() => MylibraryClick()}
                  sx={{ marginTop: "2px" }}
                >
                  <Typography
                    sx={{ marginTop: "1.5px" }}
                    color={`${theme.palette.info.main}`}
                  >
                    MyLibrary
                  </Typography>
                  <ArrowDropDownIcon
                    fontSize="small"
                    sx={{ marginTop: "1.5px" }}
                    htmlColor={`${theme.palette.info.main}`}
                  ></ArrowDropDownIcon>
                </DropDownFrameActive>
              </>
            )}
  
            <div style={{ marginLeft: "2rem", width: "37.5vw" }}>
              <SearchBar
                placeholder={"Search here by book title, author or ISBN"}
                BookData={bookData}
              ></SearchBar>
            </div>
  
            <div style={{ marginLeft: "3rem", marginTop: "10px" }}>
              {" "}
              <Icons icon={"https://i.ibb.co/TW7SLjS/bell.png"}></Icons>
            </div>
  
            <div
              style={{
                marginLeft: "1.5rem",
                marginRight: "10px",
                marginTop: "10px",
              }}
            >
              <Avatar
                src={"https://i.ibb.co/sHxLBNb/profile.png"}
                sx={{
                  marginTop: "-3px",
                  height: "40px",
                  width: "40px",
                }}
              ></Avatar>
            </div>
          </HeadInner>
          <Menu
            id="categories-menu"
            anchorReference="anchorPosition"
            anchorPosition={{ top: 68, left: 960 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "categories-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            data-testid="menu"
          >
            <MenuItem onClick={handleClose} autoFocus={false} disableGutters style={{backgroundColor:'transparent'}}>
              <AllTopic />
            </MenuItem>
          </Menu>
        </HeaderBox>
      </AppBar>
  );
};

export default HeaderComponent;


