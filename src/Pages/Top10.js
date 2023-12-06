import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Top10.css";

const Top10 = () => {
  const [top10, setTop10] = useState([]);

  useEffect(() => {
    axios
      .get("/data/top10-data/top10data.json")
      .then((response) => setTop10(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="article">
        <div className="card">
          {top10 &&
            top10.map((article, index) => (
              <div className="card" key={index}>
                <h5 className="top-label">{`TOP ${index + 1}`}</h5>
                <img src={article.urlToImage} alt={article.title} />
                <div>
                  <h5>{article.title}</h5>
                  <p>
                    {article.publishedAt} &nbsp;
                    {article.author}
                  </p>
                  <br />

                  <p>
                    {article.content &&
                      article.content.split("\n").map((paragraph, index) => (
                        <span key={index}>
                          {paragraph}
                          <br />
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Top10;
