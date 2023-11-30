import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LocalTop10 from "./Top10";

const Top10Page = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get("/data/Top10-data/top10data.json")
      .then((response) => {
        const foundArticle = response.data.articles.find(
          (article) => article.source.id === parseInt(id)
        );

        if (foundArticle) {
          foundArticle.content = foundArticle.content.replace(/\\n/g, "\n");
          setArticle(foundArticle);
        } else {
          console.log("기사를 찾을 수 없습니다.");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <p>{article.publishedAt}</p>
      <hr />
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
  );
};

export default Top10Page;
