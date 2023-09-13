import { POSTS_ENDPOINT } from "./endpoints";

// Import interfaces
import { PostProps } from "../interfaces/Post";

/**
 * getPostArchive is an async function that fetches the post archive.
 *
 * @export
 * @returns {Promise<PostProps[]>} The post archive.
 */
export const getPostArchive = async (): Promise<PostProps[]> => {
  try {
    // Fetch the post archive from the WordPress API, embed to fetch author data
    const response = await fetch(POSTS_ENDPOINT + "?_embed");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: PostProps[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
