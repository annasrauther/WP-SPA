import React from "react";
import { PostProps } from "../interface/Post";
import "../styles/post.css";

const Post: React.FC<PostProps> = ({
  title,
  datePublished,
  author,
  content,
}) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      className="post"
    >
      <header>
        <h2 itemProp="headline">{title}</h2>
        <div className="date">
          <strong>Publish Date</strong>:
          <span itemProp="datePublished">
            <time dateTime={datePublished}>{datePublished}</time>
          </span>
        </div>
        <div className="author">
          <strong>Author</strong>: <span itemProp="author">{author}</span>
        </div>
      </header>
      <div itemProp="articleBody" className="content">
        {content}
      </div>
    </article>
  );
};

export default Post;
