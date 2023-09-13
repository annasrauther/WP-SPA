import { useEffect, useState } from 'react';
import { getPage } from '../services/PageService';

// Import interfaces
import { PageProps } from '../interfaces/Page';

/**
 * Page props representing a single page's data.
 * @interface PageProps
 * @property {number} id - The unique identifier of the page.
 * @property {Object} title - The title object.
 * @property {string} title.rendered - The rendered title of the page.
 * @property {Object} content - The content object.
 * @property {string} content.rendered - The rendered content of the page.
 */

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
    const fetchPageData = async (slug: string | undefined) => {
      try {
        const pageData = await getPage(slug);
        setPage(pageData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setPage(null);
        setLoading(false);
        setError(error);
      }
    };

    fetchPageData(slug);
  }, [slug]);

  return { page, loading, error };
};
