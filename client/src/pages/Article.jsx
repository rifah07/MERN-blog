import React from "react";
import { useParams } from "react-router-dom";
import articles from "./ArticleContent";

const Article = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  if(!article) return <h1>Article does not exists in this blog</h1>;
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Article;