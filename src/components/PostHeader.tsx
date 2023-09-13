import React from "react";

// Import components
import PostDate from "./PostDate";

/**
 * Props for the PostHeader component.
 *
 * @interface PostHeaderProps
 * @property {string} title - The title of the post.
 * @property {string} date - The date of the post.
 * @property {string} author - The author of the post.
 */
interface PostHeaderProps {
  title: {
    rendered: string;
  };
  date: string;
  author: string;
}

/**
 * PostHeader component for displaying post header details.
 *
 * @param {PostHeaderProps} props - The props for the PostHeader component.
 * @returns {JSX.Element} A JSX element representing the post header.
 * @component
 */
const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  date,
  author,
}: PostHeaderProps): JSX.Element => {
  return (
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
  );
};

export default PostHeader;
