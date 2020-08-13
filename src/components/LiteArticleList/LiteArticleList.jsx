import React, { useEffect, useCallback, useState } from "react";
import { useHttp } from "../../hooks";
import shortid from "shortid";
import { LiteArticle } from "../LiteArticle";
import { Nav } from "../Nav";

import "./LiteArticleList.css";

const LiteArticleList = () => {
  const [articles, setArticles] = useState(null);
  const { request } = useHttp();

  const getArticles = useCallback(async () => {
    const articles = await request(
      "https://storage.googleapis.com/aller-structure-task/test_data.json"
    );

    setArticles(articles);
  }, [request]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div className="container">
      <Nav />
      {articles &&
        articles.length &&
        articles[0].map((row) => {
          return (
            <div
              className="row justify-content-center"
              key={shortid.generate()}
            >
              {row.columns.map((column) => (
                <LiteArticle {...column} key={shortid.generate()} />
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default LiteArticleList;
