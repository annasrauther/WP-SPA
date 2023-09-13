// Import dependencies
import React from "react";

// Import utils
import { formatDate } from "../utils/date";

/**
 * PostDate Props
 * @interface PostDateProps
 * @property {string} date
 */
interface PostDateProps {
  date: string;
}

/**
 * PostDate component
 *
 * @returns {JSX.Element}
 * @component
 * @param {PostDateProps} props
 * @param {string} props.date
 */
const PostDate: React.FC<PostDateProps> = ({ date }) => {
  // Format date
  const formattedDate = formatDate(date);

  return <time dateTime={date}>{formattedDate}</time>;
};

export default PostDate;
