// Import dependencies
import React from "react";

// Import components
import PostDate from "./PostDate";

// Import styles
import "../styles/post.css";

/**
 * Post props
 *
 * @interface PostProps
 * @property {string} title
 * @property {string} date
 * @property {string} author
 * @property {string} content
 */
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

/**
 * Post component
 *
 * @returns {JSX.Element}
 * @component
 * @param {PostProps} props
 * @param {string} props.title
 * @param {string} props.date
 * @param {string} props.author
 * @param {string} props.content
 */
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
