import { Box, Typography } from "@mui/material";
import React from "react";
import Icons from "../../atoms/icons";

export interface ListProps {
  icon: string;
  Subject: string;
  topic_1: string;
  topic_2: string;
  topic_3: string;
  topic_4: string;
  iconStyle: React.CSSProperties;
  style: React.CSSProperties;
  onClick?: () => void;
}

const topicsStyles = {
  color: "#606060",
  marginTop: "4px",
  marginBottom: "0px",
  cursor: "pointer",
};

const List = ({
  icon,
  style,
  Subject,
  topic_1,
  topic_2,
  topic_3,
  topic_4,
  iconStyle,
  onClick,
}: ListProps) => {
  return (
    <Box sx={{ display: "flex", padding: "0px 0px 48px" }}>
      <Box
        sx={{
          marginRight: "16px",
          borderRadius: "8px",
        }}
        style={style}
      >
        <Icons icon={icon} style={iconStyle} />
      </Box>
      <Box>
        <Typography
          sx={{
            marginTop: "6px",
            color: "#171717",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px !important",
            marginBottom: "2px",
          }}
          data-testid="subject"
        >
          {Subject}
        </Typography>
        <Typography data-testid = "list" onClick={onClick} sx={{ ...topicsStyles }}>
          {topic_1}
        </Typography>
        <Typography data-testid = "list1" onClick={onClick} sx={{ ...topicsStyles }}>
          {topic_2}
        </Typography>
        <Typography data-testid = "list2" onClick={onClick} sx={{ ...topicsStyles }}>
          {topic_3}
        </Typography>
        <Typography data-testid = "list3" onClick={onClick} sx={{ ...topicsStyles }}>
          {topic_4}
        </Typography>
      </Box>
    </Box>
  );
};

export default List;
