import React, { useContext } from "react";
import { MainContext } from "../reducer/context";
import Book from "./Book";
import Loader from "./Loader/Loader";

const BookList = () => {
  const {books} = useContext(MainContext);
  return (
    <>
      {books.length ? (
        books.map((item, idx) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail != undefined && amount != undefined) {
            return <Book key={idx} book={item} />;
          }
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BookList;
