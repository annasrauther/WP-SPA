import React, { useEffect, useState } from "react";

import Banner from "../components/Banner";
import PostList from "../components/PostList";

import { useAuth } from "../context/AuthContext";
import { getPostArchive } from "../services/PostService";

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
  const [userName, setuserName] = useState<string>("");
  const { authenticated } = useAuth();

  useEffect(() => {
    getPostArchive().then((data) => {
      setPosts(data);
      setLoading(false);
    });

    if (authenticated) {
      setuserName(localStorage.getItem("name") || "");
    }
  }, [authenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {authenticated ? <Banner name={userName} /> : null}
      <PostList posts={posts} />
    </>
  );
};

export default Home;
