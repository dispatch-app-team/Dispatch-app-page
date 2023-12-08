import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Top10.css";
import "../Styles/Top10DataList.css";

const Top10 = () => {
  const [top10, setTop10] = useState([]);

  useEffect(() => {
    axios
      .get("/data/top10-data/top10data.json")
      .then((response) => setTop10(response.data.articles))
      .catch((error) => console.log(error));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (index) => {
    const element = document.getElementById(`top-label-${index + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollButton = document.getElementById("scroll-to-top");
    if (scrollButton) {
      if (window.scrollY > 200) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="article">
        <div className="card">
          {top10 &&
            top10.map((article, index) => (
              <div className="card" key={`article-${index}`}>
                <Link
                  to={`/Top10#${index + 1}`}
                  onClick={() => handleItemClick(index)}
                  className="text-decoration-none"
                >
                  <h5
                    id={`top-label-${index + 1}`}
                    className="top-label"
                  >{`TOP ${index + 1}`}</h5>
                </Link>
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
                      article.content.split("\n").map((paragraph, idx) => (
                        <span key={`paragraph-${index}-${idx}`}>
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
      <button id="button-top" onClick={scrollToTop}>
        Top
      </button>
    </>
  );
};

export default Top10;