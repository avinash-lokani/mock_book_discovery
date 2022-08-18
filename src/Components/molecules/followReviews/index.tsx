import { Box, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import Icons from "../../atoms/icons";
import Star from "../../../../public/assets/icons/star.svg"
import theme from "../../../core-utils/theme";

export interface ReviewsProps{
    avatar:string;
    reviewerName:string;
    designation:string;
    rating:number;
    comment:string;
}

const FollowReviews = ({avatar,comment,reviewerName,designation,rating}:ReviewsProps) => { 
    return (
        
        <Box sx = {{border:1, borderColor:theme.palette.grey[50], borderRadius:2,marginRight:'24px',padding:" 12px 6px 12px 6px"}}>
        <Box sx = {{
            display:"flex"
        }}>
            <Avatar src={avatar} sx = {{
                height : "60px",
                width : theme.spacing(15)
            }}></Avatar>
            <Box sx = {{
                marginLeft : "24px"
            }}>
                <Typography variant = "subtitle1">{reviewerName}</Typography>
                <Typography variant = "caption" color = "primary.light">{designation}</Typography>
                <div style = {{display:"flex"}}>
                    <Typography variant = "caption" color = "primary.light" sx = {{
                       marginTop : "4px",
                       marginRight : "10px",
                    }}>{rating}</Typography>
                    <Icons icon={Star} />
                </div>
                
            </Box>
           
        </Box>
        <Typography color = "primary.main" variant = "caption"sx = {{
            margin : "18px 2px 12px 2px",
            width:theme.spacing(180),
            textAlign:"left",
            height : "32px",
            padding : "0px"
         
        }}>{comment}</Typography>
        </Box>
    )
}

export default FollowReviews;

