import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">News</span>
      </h2>

      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-3" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
