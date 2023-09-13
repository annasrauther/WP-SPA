import React from "react";

import "../styles/post.css";
import PostDate from "./PostDate";

interface PostProps {
  title: {
    rendered: string;
  };
  date: string;
  author: string;
  content: {
    rendered: string;
  };
}

const Post: React.FC<PostProps> = ({ title, date, author, content }) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      className="post"
    >
      <header>
        <h2
          itemProp="name headline"
          dangerouslySetInnerHTML={{ __html: title.rendered }}
        />
        <div className="date">
          <strong>Publish Date</strong>:
          <span itemProp="datePublished">
            <PostDate date={date} />
          </span>
        </div>
        <div className="author">
          <strong>Author</strong>: <span itemProp="author">{author}</span>
        </div>
      </header>
      <div
        itemProp="articleBody"
        className="content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
    </article>
  );
};

export default Post;
