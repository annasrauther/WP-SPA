import React from "react";
import { useParams } from "react-router-dom";

// Import components
import Loading from "../components/Loading";

// Import hooks
import { usePage } from "../hooks/usePage";

/**
 * Page component to display a single page's content.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the page.
 */
const Page: React.FC = (): JSX.Element => {
  // Retrieve the slug from the URL using useParams()
  const { slug } = useParams();

  /**
   * Custom hook to fetch page data based on a slug.
   * @type {Object}
   * @property {PageProps | null} page - The page data, or null if not yet loaded.
   * @property {boolean} loading - A boolean indicating if data is still loading.
   * @property {Error | null} error - An error object if an error occurred, or null if no error.
   */
  const { page, loading, error } = usePage(slug);

  // If the page is still loading, display a loading indicator.
  if (loading) {
    return <Loading />;
  }

  // If an error occurred while fetching the page, display an error message.
  if (error) {
    console.error("Error fetching page:", error);
    return <div>An error occurred while fetching the page.</div>;
  }

  // If no page was found, display a message.
  if (!page) {
    return <div>Page not found.</div>;
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
