import React from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  // Retrieve the slug from the URL using useParams()
  const { slug } = useParams();

  return (
    <>
      <h1>About {slug}</h1>

      <div className="page">
        {/* Retrieve about text from WP API.*/}
        10up about text...
      </div>
    </>
  );
};

export default Page;
