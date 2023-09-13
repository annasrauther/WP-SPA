import { POSTS_ENDPOINT } from "./endpoints";

/**
 * PostProps is the interface for the Post object.
 *
 * @interface PostProps
 * @property {number} id The ID of the post.
 * @property {string} slug The slug of the post.
 * @property {object} title The title of the post.
 * @property {string} title.rendered The rendered title of the post.
 * @property {object} content The content of the post.
 * @property {string} content.rendered The rendered content of the post.
 * @property {string} date The date of the post.
 * @property {object} _embedded The embedded object.
 * @property {object[]} _embedded.author The author object.
 * @property {string} _embedded.author[].name The name of the author.
 * @export
 */
interface PostProps {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    author: [
      {
        name: string;
      },
    ];
  };
}

/**
 * getPostArchive is an async function that fetches the post archive.
 *
 * @export
 * @returns {Promise<PostProps[]>} The post archive.
 */
export const getPostArchive = async () => {
  const response = await fetch(POSTS_ENDPOINT + "?_embed");
  const data: PostProps[] = await response.json();
  return data;
};
