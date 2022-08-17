import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import Icons from "../../atoms/icons";
import Like from "../../../../public/assets/icons/like.svg"
import Unlike from "../../../../public/assets/icons/unlike.svg"
import Star from "../../../../public/assets/icons/star.svg"
import theme from "../../../core-utils/theme";

export interface ReviewsProps{
    avatar:string;
    reviewerName:string;
    designation:string;
    rating:number;
    comment:string;
}

const Review = ({avatar,comment,reviewerName,designation,rating} : ReviewsProps) => {
   

    return (
    
        <Grid container xs = {8} md = {8}>
            <Grid item  sx = {{
                display:"flex",
                flexWrap:"wrap"
            }}>
                <Avatar src={avatar} sx = {{
                    height : "60px",
                    width : theme.spacing(15)
                }}></Avatar>
                <Box sx = {{
                    marginLeft : "12px"
                }}>
                    <Typography variant = "subtitle1" color = "primary.dark">{reviewerName}</Typography>
                    <Typography color="primary.light" variant = "caption" >{designation}</Typography>
                    <div style = {{display:"flex",flexWrap:"wrap"}}>
                        <Typography variant = "caption" color="primary.light" sx = {{
                           marginTop : "4px",
                           marginRight : "10px",
                        }}>{rating}</Typography>
                        <Icons icon={Star} />
                    </div>
                    
                </Box>
               
            </Grid>
            <Grid item>
            <Typography variant = "caption" color = "primary.main" sx = {{
                marginLeft : "0px",
                marginTop:"14px",
                width:theme.spacing(180),
                textAlign:"left",
                height : "32px",
                padding : "0px"
                


            }}>{comment}<Typography component = "span" variant = "caption" color = "secondary.main">See more</Typography></Typography>
                <div style = {{display:"flex",flexWrap:"wrap", marginTop:"18px"}}>
                    <div><Icons icon={Like} /></div>
                    <div style = {{marginLeft: "28px"}}><Icons icon={Unlike} /></div>
                    <div  style = {{marginLeft: "22px"}}><Typography color="primary.dark" variant = "caption">Reply</Typography></div>
                </div>
            </Grid>    
        </Grid>
        
    )
};

export default Review;