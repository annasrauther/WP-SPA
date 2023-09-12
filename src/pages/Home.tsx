import React from "react";
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import { PostListProps } from "../interface/PostList";

const data: PostListProps = {
  posts: [
    {
      title: "Post Title 1",
      datePublished: "2016-05-01",
      author: "Jane Doe",
      content: "Post content...",
    },
    {
      title: "Post Title 2",
      datePublished: "2016-05-01",
      author: "Jane Doe",
      content: "Post content...",
    },
  ],
};

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <PostList posts={data.posts} />
    </>
  );
};

export default Home;
