import React from "react";
import BookList from "./BookList";
import Error from "./Error/Error";

const Content = ({ books }) => {
  // console.log(books);
  if (!books) {
    return <Error />;
  }
  return (
    <div className="content container">
      <BookList books={books} />
    </div>
  );
};

export default Content;
