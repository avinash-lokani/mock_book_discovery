import { styled, Typography } from "@mui/material";
import React from "react";

type NotfoundProps = {
  children: string;
};

const NotfoundBox = styled("div")({
  width: "513px",
  height: "43px",
  borderRadius: "5px",
  backgroundColor: "white",
  paddingTop: "12px",
  paddingLeft: "20px",
});

const NotfoundComponent = (props: NotfoundProps) => {
  return (
    <NotfoundBox>
      <Typography variant="body1" color="primary.main">
        {props.children}
      </Typography>
    </NotfoundBox>
  );
};

export default NotfoundComponent;