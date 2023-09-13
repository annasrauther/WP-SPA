import { POSTS_ENDPOINT } from "./endpoints";

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

export const getPostArchive = async () => {
  const response = await fetch(POSTS_ENDPOINT + "?_embed");
  const data: PostProps[] = await response.json();
  return data;
};
