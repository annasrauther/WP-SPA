import React from 'react';

// Import components
import Post from './Post';

// Import interface
import { PostProps } from '../interface/Post';

/**
 * PostList component that renders a list of blog posts.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {PostProps[]} props.posts - An array of blog post data.
 * @param {number} props.posts[].id - The unique identifier for the post.
 * @param {Object} props.posts[].title - The post's title object.
 * @param {string} props.posts[].title.rendered - The rendered title of the post.
 * @param {string} props.posts[].date - The publication date of the post.
 * @param {Object} props.posts[].content - The post's content object.
 * @param {string} props.posts[].content.rendered - The rendered content of the post.
 * @param {Object[]} props.posts[]._embedded.author - An array of author objects.
 * @param {string} props.posts[]._embedded.author[].name - The name of the post's author.
 *
 * @returns {JSX.Element} The JSX element representing the list of blog posts.
 */
const PostList: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
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
