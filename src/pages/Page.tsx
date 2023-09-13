// Import dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import services
import { getPage } from "../services/PageService";

/**
 * Page props
 * @interface PageProps
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

interface PageProps {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

const Page: React.FC = () => {
  // Retrieve the slug from the URL using useParams()
  const { slug } = useParams();
  const [page, setPage] = useState<PageProps>({
    id: 0,
    title: {
      rendered: "",
    },
    content: {
      rendered: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPage(slug).then((data) => {
      setPage(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page.title?.rendered }} />
      <div
        className="page"
        dangerouslySetInnerHTML={{ __html: page.content?.rendered }}
      />
    </>
  );
};

export default Page;
