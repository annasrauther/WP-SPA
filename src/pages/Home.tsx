// Import dependencies
import React, { useEffect, useState } from "react";

// Import components
import Banner from "../components/Banner";
import PostList from "../components/PostList";

// Import hooks
import { useAuth } from "../context/AuthContext";

// Import services
import { getPostArchive } from "../services/PostService";
import Loading from "../components/Loading";

/**
 * Post props
 * @interface PostProps
 * @property {number} id
 * @property {string} title
 * @property {string} date
 * @property {string} content
 * @property {object} _embedded
 * @property {object[]} _embedded.author
 * @property {string} _embedded.author[].name
 */
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

/**
 * Home component
 *
 * @returns {JSX.Element}
 * @component
 */
const Home: React.FC = () => {
  // Declare state variables
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");

  const { authenticated } = useAuth();

  useEffect(() => {
    // Get posts
    getPostArchive().then((data) => {
      setPosts(data);
      setLoading(false);
    });

    // If authenticated, get user name from local storage
    if (authenticated) {
      setUserName(localStorage.getItem("name") || "");
    }
  }, [authenticated]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {
        /* If authenticated, display banner */
        authenticated ? <Banner name={userName} /> : null
      }
      <PostList posts={posts} />
    </>
  );
};

export default Home;
