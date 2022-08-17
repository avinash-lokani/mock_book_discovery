import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    className?: string;
    onClick : (event: React.ChangeEvent<unknown>, currentPage:number) => void;
    style?: React.CSSProperties;
    page?: number;
    setPage?:any;
    count ?: number;
}

const useStyles = makeStyles(() => ({
    root: {
      "& .MuiPaginationItem-outlined": {
        borderColor: "#FF725E"
      }, 
      "& .MuiPaginationItem-outlined:active": {
        backgroundColor: "#FF725E",
        borderColor: "#FF725E",
        color: "white"
      }, 
      "& .MuiPaginationItem-outlined:hover": {
        backgroundColor: "#FF725E",
        borderColor: "#FF725E",
        color: "white"
      },  
      "& .MuiPaginationItem-outlined.Mui-selected": {
        backgroundColor: "#FF725E",
        borderColor: "#FF725E",
        color: "white"
      }
    },
  }));


const BookPagination = (props:Props) => {
    const classes = useStyles();
    return(
        <Box className={props.className}>
            <Stack spacing={1}>
              <Pagination role="pagination" classes={{ root: classes.root }}
               count={props.count} variant="outlined" shape="rounded" onChange={(event: React.ChangeEvent<unknown>, currentPage: number) => props.onClick(event, currentPage)}/>
            </Stack>
        </Box>
                
    )
}

export default BookPagination;