import React from "react";

/**
 * NotFound component to display a 404 error message.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the 404 error page.
 */
const NotFound: React.FC = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
