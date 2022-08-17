import { Box, Divider, Paper } from "@mui/material";
import React from "react";
import theme from "../../../core-utils/theme";
import ButtonComponent from "../../atoms/Buttons/index"

export interface SearchResultProps{
    results: React.ReactElement[];
    
}

const SearchResult = (props:SearchResultProps) => {
    const resultsList = props.results.map(bookdes => <Box key = {bookdes.key}>{bookdes} <Divider  sx={{margin : "0px 24px 0px 24px",padding : 0,color:"grey.50" }} /> </Box>)

    return (
        <Paper sx = {{
            width:theme.spacing(128.25)
        }}>
            {resultsList}

            <ButtonComponent role={"button"} color="secondary"  style={{width : theme.spacing(128.25)}} >See all results</ButtonComponent>

        </Paper>
    )
}

export default SearchResult;