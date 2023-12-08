import React from "react";
import NewsData from "./NewsData";
import Top10Data from "./Top10Data";
import PhotosData from "./PhotosData";
import VideosData from "./VideosData";
const Home = () => {
   
  return (
    <div className="container">
    <div>
      <NewsData/>
      <hr/>
      <PhotosData/>
      <hr/>
      <VideosData/>
    </div>
    <div>
      <Top10Data/>
    </div>
    </div>
  );
};

export default Home;

