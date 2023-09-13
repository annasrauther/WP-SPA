import React from "react";
import { formatDate } from "../utils/date";

interface PostDateProps {
  date: string;
}

const PostDate: React.FC<PostDateProps> = ({ date }) => {
  const formattedDate = formatDate(date);

  return <time dateTime={date}>{formattedDate}</time>;
};

export default PostDate;
