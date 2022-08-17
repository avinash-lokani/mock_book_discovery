import React from "react";
import HomePageDetail from "../../organisms/homePageDetail";
import HomePageTemplate from "../../templates/landingTemplate";


const HomePage = () => {
 
  return (
      <HomePageTemplate template={<HomePageDetail/>}/>
  );
};

export default HomePage;