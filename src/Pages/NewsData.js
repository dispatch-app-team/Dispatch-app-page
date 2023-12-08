import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/NewsData.css';

const NewsData = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("/data/news-data/newsdata.json")
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
  <>
    <div className="newslistdata">
      <h2>News</h2>
      <Link to={`/News`} className="text-decoration-none more-link">more >></Link>
    </div>
    <div className="newslist">
      {news &&
        news.slice(0, 2).map((article, index) => (
          <div key={index}>
           <Link to={`/ArticlePage/${article.source.id}`} className="text-decoration-none">

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

export default NewsData;