import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/NewsData.css';

const PhotosData = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("/data/photos-data/photosdata.json")
      .then((response) => setPhotos(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
  <>
    <div className="newslistdata">
      <h2>Photos</h2>
      <Link to={`/Photos`} className="text-decoration-none more-link">more >></Link>
    </div>
    <div className="newslist">
      {photos &&
        photos.slice(0, 2).map((article, index) => (
          <div key={index}>
           <Link to={`/PhotosPage/${article.source.id}`} className="text-decoration-none">
              <div className="newslistmain">
                    <img src={article.urlToImage} alt={article.title} />
                    <div className="newslisttext">
                    <h6>{article.title}</h6>
                    </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  </>
);
}

export default PhotosData;