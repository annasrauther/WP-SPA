import React, { useEffect, useState, lazy, Suspense } from "react";

// Import hooks
import { useAuth } from "../hooks/useAuth";
import { usePosts } from "../hooks/usePosts";

// Use React.lazy to import components lazily
const Banner = lazy(() => import("../components/Banner"));
const Loading = lazy(() => import("../components/Loading"));
const PostList = lazy(() => import("../components/PostList"));

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

  // Render an error message if an error occurred during data fetching
  if (error) {
    console.error("Error fetching posts:", error);
    return <div>An error occurred while fetching posts.</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      {/* Display the banner if authenticated */}
      {authenticated && <Banner name={userName} />}
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <div>No posts found.</div>
      )}
    </Suspense>
  );
};

export default Home;
