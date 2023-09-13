import React from "react";

interface BannerProps {
  name: string;
}

const Banner: React.FC<BannerProps> = ({ name }) => {
  return <section className="welcome logged-in">Welcome {name}!</section>;
};

export default Banner;
