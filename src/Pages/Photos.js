/*
    FILE: News.js
    작성자: 20212143 김채희
    23.12.05
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Photos.css';
import { Link } from "react-router-dom";

const LocalPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("/data/photos-data/photosdata.json")
      .then((response) => setPhotos(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="container">
      <div className="photo-main">
        {photos &&
          photos.map((article, index) => (
            <div key={index} className="photo-m1">
              <Link to={`/PhotosPage/${article.source.id}`} className="text-decoration-none">
                <div className="photo-m2">
                  <img className="photo-thumbnail" src={article.urlToImage} alt={article.title} />
                  <h5 className="photo-title">{article.title}</h5>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}

export default LocalPhotos;