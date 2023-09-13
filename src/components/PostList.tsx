import React from "react";
import Post from "./Post";

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
