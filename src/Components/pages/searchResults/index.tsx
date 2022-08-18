import React from "react"
import BookCards from "../../organisms/bookCards"
import LandingTemplate from "../../templates/landingTemplate";
import {useLocation} from 'react-router-dom';
import {BookDataProp} from "../../organisms/bookCards"

interface CustomizedState{
    data : Array<BookDataProp>;
    input: string;
}

const SearchResultsPage:React.FC = () => {
    const location = useLocation();
    const state = location.state as CustomizedState;
    
    return (
        <LandingTemplate template={<BookCards allBookData={state.data} searchInput={state.input} title={'Search Results'}/>}/>
    )
}

export default SearchResultsPage;