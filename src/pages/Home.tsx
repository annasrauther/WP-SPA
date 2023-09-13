import React, { useEffect, useState } from "react";

// Import components
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import PostList from "../components/PostList";

// Import hooks
import { useAuth } from "../hooks/useAuth";
import { usePosts } from "../hooks/usePosts";

/**
 * Home component displaying user-specific content.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the home page.
 */
const Home: React.FC = (): JSX.Element => {
  // Fetch posts, loading state, and error state using the custom hook
  const { posts, loading, error } = usePosts();
  const { authenticated } = useAuth();
  const [userName, setUserName] = useState<string>("");

  // Set the user's name from local storage when authenticated
  useEffect(() => {
    if (authenticated) {
      const storedName = localStorage.getItem("name") || "";
      setUserName(storedName);
    }
  }, [authenticated]);

  // Render loading indicator if data is still loading
  if (loading) {
    return <Loading />;
  }

  // Render an error message if an error occurred during data fetching
  if (error) {
    console.error("Error fetching posts:", error);
    return <div>An error occurred while fetching posts.</div>;
  }

  return (
    <>
      {/* Display the banner if authenticated */}
      {authenticated && <Banner name={userName} />}
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <div>No posts found.</div>
      )}
    </>
  );
};

export default Home;
