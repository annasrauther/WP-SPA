import { PAGE_ENDPOINT } from "./endpoints";

// Import interfaces
import { PageProps } from "../interfaces/Page";

/**
 * PageProps is the interface for the Page object.
 *
 * @interface PageProps
 * @property {number} id The ID of the page.
 * @property {object} title The title of the page.
 * @property {string} title.rendered The rendered title of the page.
 * @property {object} content The content of the page.
 * @property {string} content.rendered The rendered content of the page.
 */

/**
 * Fetches a page by its slug from the WordPress API.
 *
 * @param {string} slug The slug of the page to fetch.
 * @returns {Promise<PageProps>} A promise that resolves with the fetched page.
 * @throws {Error} If the fetch request fails or the response is not valid JSON.
 * @throws {Error} If the response indicates a failure (e.g., 404 Not Found).
 */
export const getPage = async (slug: string): Promise<PageProps> => {
  try {
    const response = await fetch(`${PAGE_ENDPOINT}?slug=${slug}`);

    if (!response.ok) {
      const errorMessage = `Failed to fetch page for slug "${slug}".`;

      if (response.status === 404) {
        throw new Error(`Page not found for slug "${slug}".`);
      }

      throw new Error(errorMessage);
    }

    const data: PageProps[] = await response.json();

    if (!data || data.length === 0) {
      throw new Error(`Page not found for slug "${slug}".`);
    }

    return data[0];
  } catch (error) {
    throw error;
  }
};
