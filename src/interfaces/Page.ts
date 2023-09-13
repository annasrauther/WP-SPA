/**
 * Page props representing a single page's data.
 * @interface PageProps
 * @property {number} id - The unique identifier of the page.
 * @property {Object} title - The title object.
 * @property {string} title.rendered - The rendered title of the page.
 * @property {Object} content - The content object.
 * @property {string} content.rendered - The rendered content of the page.
 */
export interface PageProps {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}
