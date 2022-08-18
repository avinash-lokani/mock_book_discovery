import React from "react"
import BookCards from "../../organisms/bookCards"
import LandingTemplate from "../../templates/landingTemplate"

const SearchResultsPage:React.FC = () => {
    return (
        <LandingTemplate template={<BookCards title={'Search Results'} allBookData={[]}/>}/>
    )
}

export default SearchResultsPage;