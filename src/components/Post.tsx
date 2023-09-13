// Import dependencies
import React from "react";

// Import components
import ContentRenderer from "./ContentRenderer";
import PostHeader from "./PostHeader";

// Import styles
import "../styles/post.css";

/**
 * Props for the Post component.
 *
 * @interface PostProps
 * @property {string} title - The title of the post.
 * @property {string} date - The date of the post.
 * @property {string} author - The author of the post.
 * @property {string} content - The content of the post (HTML).
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
 * PostHeader component for displaying post header details.
 *
 * @param {PostProps} props - The props for the PostHeader component.
 * @returns {JSX.Element} A JSX element representing the post header.
 */
const Post: React.FC<PostProps> = ({
  title,
  date,
  author,
  content,
}: PostProps): JSX.Element => {
  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      className="post"
    >
      <PostHeader title={title} date={date} author={author} />
      <ContentRenderer content={content} />
    </article>
  );
};

export default Post;
