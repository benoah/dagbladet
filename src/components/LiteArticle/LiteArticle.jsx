import React from "react";
import "./LiteArticle.css";

const LiteArticle = ({ url = "", title = "" }) => (
  <div className="lite-title-wrapper">
    <h2 className="lite-title title-preview">{title}</h2>
  </div>
);

export default LiteArticle;
