import React, { useEffect, useCallback, useState } from "react";
import { Article } from "../Article";
import { Modal } from "../Modal";
import { Nav } from "../Nav";
import { useHttp } from "../../hooks";
import shortid from "shortid";

import "./ArticleList.css";

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [prevArticles, setPrevArticles] = useState(null);
  const [editId, setEditId] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [counter, setCounter] = useState(7);
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

  const setEditArticleMode = (id) => {
    setEditId(id);
  };

  const cancelEditMode = () => {
    setEditId(null);
  };

  const saveTitle = (id, text) => {
    const articlesWithNewTitle = articles[0].map((row) => {
      return {
        type: "Row",
        columns: row.columns.map((column) => {
          if (column.url === id) {
            column.title = text;
          }

          return column;
        }),
      };
    });

    setArticles([articlesWithNewTitle]);
    cancelEditMode();
  };

  const removeArticle = (id) => {
    setPrevArticles(articles);

    setArticles([
      articles[0].map((row) => {
        return {
          type: "Row",
          columns: row.columns.filter((column) => column.url !== id),
        };
      }),
    ]);

    setOpenModal(true);

    setCounter(7);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const restoreArticle = () => {
    setArticles(prevArticles);
  };

  return (
    <div className="container">
      <Nav />
      <Modal
        text="Would you want to restore deleted article?"
        openModal={openModal}
        closeModal={closeModal}
        restoreArticle={restoreArticle}
        counter={counter}
        setCounter={setCounter}
      />
      {articles && articles.length && (
        <div className="row" key={shortid.generate()}>
          {articles[0].map((row) => {
            return row.columns.map((column) => (
              <Article
                {...column}
                key={shortid.generate()}
                edit={setEditArticleMode}
                cancel={cancelEditMode}
                save={saveTitle}
                editId={editId}
                remove={removeArticle}
              />
            ));
          })}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
