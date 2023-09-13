import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import { getPostArchive } from "../services/posts";

interface PostProps {
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
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPostArchive().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner />
      <PostList posts={posts} />
    </>
  );
};

export default Home;
