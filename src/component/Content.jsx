import React, { useContext } from "react";
import { MainContext } from "../reducer/context";
import BookList from "./BookList";
import Cart from "./Cart";
import Error from "./Error/Error";
import ModalList from "./ModalList";
import Search from "./Search";

const Content = ({searchBar}) => {
  const { books, modal } = useContext(MainContext);
  if (!books) {
    return <Error />;
  }
  return (
    <div className="content container">
      <Search searchBar={searchBar}  />
      {modal && <ModalList />}
      <Cart />
      <BookList />
    </div>
  );
};

export default Content;
