import { PAGE_ENDPOINT } from "./endpoints";

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
interface PageProps {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

/**
 * getPage is an async function that fetches the page.
 *
 * @export
 * @param {string} [slug] The slug of the page.
 * @returns {Promise<PageProps>} The page.
 */
export const getPage = async (slug: string | undefined) => {
  const response = await fetch(PAGE_ENDPOINT + `?slug=${slug}`);
  const data: PageProps[] = await response.json();
  return data[0];
};
