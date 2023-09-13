import React from "react";

function formatDate(inputDate: string) {
  const dateObject = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  return formattedDate;
}

interface PostDateProps {
  date: string;
}

const PostDate: React.FC<PostDateProps> = ({ date }) => {
  const formattedDate = formatDate(date);

  return <time dateTime={date}>{formattedDate}</time>;
};

export default PostDate;
