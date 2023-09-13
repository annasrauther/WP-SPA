import { PAGE_ENDPOINT } from "./endpoints";

interface PageProps {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

export const getPage = async (slug: string | undefined) => {
  const response = await fetch(PAGE_ENDPOINT + `?slug=${slug}`);
  const data: PageProps[] = await response.json();
  return data[0];
};
