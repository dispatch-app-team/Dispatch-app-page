/*
    FILE: News.js
    작성자: 20212143 김채희
    23.12.05
*/

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../Styles/ArticlePage.css';
import './Top10Data';
import Top10Data from "./Top10Data";

const PhotosPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get("/data/photos-data/photosdata.json")
      .then((response) => {
        const foundArticle = response.data.articles.find(article => article.source.id === parseInt(id));
        foundArticle.content = foundArticle.content.replace(/\\n/g, '\n');
        setArticle(foundArticle);
      })
      .catch((error) => console.log(error));
  }, [id]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <div className="container">
      <div className="Article-main">
        <h1>{article.title}</h1>
        <div className="detail">
          <p>{article.publishedAt}</p>
          <p>{article.author}</p>
        </div>
        <hr/>
        <img src={article.urlToImage} alt={article.title}/>
        <p>{article.content && article.content.split('\n').map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            <br />
          </span>
        ))}</p>
      </div>
      <div className="top10list">
        <Top10Data/>
      </div>
    </div>
    <button id="button-top" onClick={scrollToTop}>
    Top
    </button>
    </>
  );
}

export default PhotosPage;