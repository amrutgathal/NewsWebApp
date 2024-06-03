import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              apiKey: "5fefb25db5d447ac86c04f22b0dd4114",
            },
          }
        );
        setArticles(response.data.articles.slice(0, 5));
      } catch (err) {
        setError("Failed to fetch news headlines. Please try again later.");
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div key={index} className="news-card">
          {article.urlToImage && (
            <div
              className="news-image"
              style={{ backgroundImage: `url(${article.urlToImage})` }}
            ></div>
          )}
          <div className="news-content">
            <h2 className="news-title">{article.title}</h2>
            <p className="news-source">
              {article.source.name} -{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="news-description">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
