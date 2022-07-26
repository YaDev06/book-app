import React, { useContext } from "react";
import { MainContext } from "../reducer/context";
import BookList from "./BookList";
import Error from "./Error/Error";

const Content = () => {
  const {books} = useContext(MainContext)
  if (!books) {
    return <Error />;
  }
  return (
    <div className="content container">
      <BookList />
    </div>
  );
};

export default Content;
