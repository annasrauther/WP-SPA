import { useEffect, useState } from 'react';

// Import services
import { getPostArchive } from '../services/PostService';

// Import interfaces
import { PostProps } from '../interfaces/Post';

/**
 * Custom hook for fetching posts, handling loading, and errors.
 *
 * @returns {{
 *   posts: PostProps[],
 *   loading: boolean,
 *   error: Error | null
 * }} An object containing posts, loading state, and error state.
 */
export const usePosts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Fetch posts data from an external API.
   *
   * @throws {Error} Throws an error if the API request fails.
   */
  const fetchPostsData = async () => {
    try {
      const data: PostProps[] = await getPostArchive();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPostsData();
  }, []);

  return { posts, loading, error };
};
