// Import dependencies
import React from "react";

/**
 * Banner component to display a welcome message.
 *
 * @param {Object} props - Component props.
 * @param {string} props.name - The user's name to display in the banner.
 * @returns {JSX.Element} JSX element representing the banner.
 */
function Banner({ name }: { name: string }): JSX.Element {
  return (
    <div className="banner">
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default Banner;
