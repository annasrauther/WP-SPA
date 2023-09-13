/**
 * PostList Props
 *
 * @interface PostListProps
 * @property {object[]} posts
 * @property {number} posts[].id
 * @property {object} posts[].title
 * @property {string} posts[].title.rendered
 * @property {string} posts[].date
 * @property {object} posts[].content
 * @property {string} posts[].content.rendered
 * @property {object} posts[]._embedded
 * @property {object[]} posts[]._embedded.author
 * @property {string} posts[]._embedded.author[].name
 */
export interface PostProps {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  content: {
    rendered: string;
  };
  _embedded: {
    author: {
      name: string;
    }[];
  };
}

export interface PostArchiveProps {
  posts: PostProps[];
  loading: boolean;
  error: Error | null;
}
