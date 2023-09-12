import React from "react";
import Post from "./Post";
import { PostListProps } from "../interface/PostList";

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div itemScope itemType="https://schema.org/Blog">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          datePublished={post.datePublished}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostList;
