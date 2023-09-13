// Import dependencies
import React from "react";

/**
 * Banner Props
 * @interface BannerProps
 * @property {string} name
 */
interface BannerProps {
  name: string;
}

/**
 * Banner component
 *
 * @returns {JSX.Element}
 * @component
 * @param {BannerProps} props
 * @param {string} props.name
 */
const Banner: React.FC<BannerProps> = ({ name }) => {
  return <section className="welcome logged-in">Welcome {name}!</section>;
};

export default Banner;
