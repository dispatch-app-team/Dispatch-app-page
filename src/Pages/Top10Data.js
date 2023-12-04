import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/Top10DataList.css';

const LocalPhotos = () => {
  const [top10, settop10s] = useState([]);

  useEffect(() => {
    axios.get("/data/top10-data/top10data.json")
      .then((response) => settop10s(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <div className="top10listdata">
      <h2>Top 10</h2>
      <div className="list">
        {top10 &&
          top10.map((article, index) => (
            <div key={index}>
              <Link to={`/Top10`} className="text-decoration-none">
                <div className="listTitle">
                  <h6>{article.title}</h6>
                  <hr/>
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