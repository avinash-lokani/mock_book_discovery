/* eslint-disable react/no-children-prop */
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/Buttons";
import {
  BannerHeading,
  BannerDesc1,
  BannerDesc2,
} from "../../../core-utils/messages/index";
import theme from "../../../core-utils/theme";

type BannerProps = {
  style?: React.CSSProperties;
  imgSrc?: string;
};

const BannerBox = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems:'left'
});

const TextBox = styled("div")({
  textAlign:'left',
  width: "65%",
  height: "70%",
  marginLeft: "48px",
  marginTop: "45px",
});

const ImageBox = styled("div")({
  marginTop: "45px",
  height: "90%",
  marginRight: "10px",
  marginLeft: "10px",
});

const BannerComponent = (props: BannerProps) => {
  return (
    <Box
      sx={{
        height: 266,
        background: `linear-gradient(180deg, ${theme.palette.info.dark} 0%, ${theme.palette.success.main} 100%)`,
        borderRadius: "5px",
      }}
    >
      <BannerBox>
        <TextBox>
          <Typography variant="h3" color="info.main">
            {BannerHeading}
          </Typography>
          <Typography variant="body1" color="info.main">
            {BannerDesc1}
            <br />
            {BannerDesc2}
          </Typography>
          <br />
          <br />
          <ButtonComponent
            children={"Discover"}
            variant={"contained"}
            color={"secondary"}
            style={{
              backgroundColor:`${theme.palette.secondary.main}`,
              boxShadow:'none'
            }}
          />
        </TextBox>
        <ImageBox>
          <img src={props.imgSrc}></img>
        </ImageBox>
      </BannerBox>
    </Box>
  );
};

export default BannerComponent;
