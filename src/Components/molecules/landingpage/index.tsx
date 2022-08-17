import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
  landinPageHeading,
  landinPageText,
  landingPageButtonText,
} from "../../../core-utils/messages/index";
import theme from "../../../core-utils/theme";
import ButtonComponent from "../../atoms/Buttons";

const LandingPageStarter = () => {
  return (
    <Box
      sx={{
        marginLeft:'120px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "25%",
        left: "27%"
      }}
    >
      <Box sx={{margin: theme.spacing(4)}}>
        <img src={"https://i.ibb.co/KXxKdLN/Group-3800.png"} alt="image"/>
      </Box>
      <Box sx={{margin: theme.spacing(4)}}>
        <Typography color="primary.dark" variant="h2">
          {landinPageHeading}
        </Typography>
      </Box>
      <Box sx={{marginBottom: theme.spacing(4)}}>
        <Typography color="primary" variant="subtitle1">
          {landinPageText}
        </Typography>
      </Box>
      <ButtonComponent
        variant="contained"
        color="secondary"
        style={{
          backgroundColor: `${theme.palette.secondary.main}`,
          textTransform: "none",
          boxShadow:'none'
        }}
      >
        {landingPageButtonText}
      </ButtonComponent>
    </Box>
  );
};

export default LandingPageStarter;
