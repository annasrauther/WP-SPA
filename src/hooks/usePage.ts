import { useEffect, useState } from "react";
import { getPage } from "../services/PageService";

// Import interfaces
import { PageProps } from "../interfaces/Page";

/**
 * Custom hook to fetch page data based on a slug.
 *
 * @param {string} slug - The slug of the page to fetch.
 * @returns {Object} An object containing page data, loading state, and error state.
 * @property {PageProps | null} page - The page data, or null if not yet loaded.
 * @property {boolean} loading - A boolean indicating if data is still loading.
 * @property {Error | null} error - An error object if an error occurred, or null if no error.
 */
export const usePage = (slug: string | undefined) => {
  const [page, setPage] = useState<PageProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If no slug is provided, set loading to false and return
    if (slug === undefined) {
      setLoading(false);
      setError(null);
      return;
    }

    /**
     * Fetch page data from the API.
     *
     * @param {string} slug - The slug of the page to fetch.
     * @returns {Promise<void>}
     * @throws {Error}
     * @async
     */
    const fetchPageData = async (slug: string) => {
      try {
        const pageData = await getPage(slug);
        setPage(pageData);
        setLoading(false);
        setError(null);
      } catch (error: unknown | null) {
        setPage(null);
        setLoading(false);
        setError(error as Error);
      }
    };

    // Call the async fetchPageData function
    fetchPageData(slug);
  }, [slug]);

  return { page, loading, error };
};
