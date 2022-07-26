import React from "react";
import Book from "./Book";
import Loader from "./Loader/Loader";

const BookList = ({ books }) => {
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
