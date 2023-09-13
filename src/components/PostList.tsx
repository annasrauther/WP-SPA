// Import dependencies
import React from "react";

// Import components
import Post from "./Post";

/**
 * PostList Props
 *
 * @interface PostListProps
 * @property {object[]} posts
 * @property {number} posts[].id
 * @property {object} posts[].title
 * @property {string} posts[].title.rendered
 * @property {string} posts[].date
 * @property {object} posts[].content
 * @property {string} posts[].content.rendered
 * @property {object} posts[]._embedded
 * @property {object[]} posts[]._embedded.author
 * @property {string} posts[]._embedded.author[].name
 */
interface PostListProps {
  posts: {
    id: number;
    title: {
      rendered: string;
    };
    date: string;
    content: {
      rendered: string;
    };
    _embedded: {
      author: {
        name: string;
      }[];
    };
  }[];
}

/**
 * PostList component
 *
 * @returns {JSX.Element}
 * @component
 * @param {PostListProps} props
 * @param {object[]} props.posts
 * @param {number} props.posts[].id
 * @param {object} props.posts[].title
 * @param {string} props.posts[].title.rendered
 * @param {string} props.posts[].date
 * @param {object} props.posts[].content
 * @param {string} props.posts[].content.rendered
 * @param {object} props.posts[]._embedded
 * @param {object[]} props.posts[]._embedded.author
 * @param {string} props.posts[]._embedded.author[].name
 */
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div itemScope itemType="https://schema.org/Blog">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          date={post.date}
          author={post?._embedded?.author[0]?.name}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostList;
