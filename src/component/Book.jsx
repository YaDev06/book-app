import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const getData = () => {
    console.log(book.id);
  };
  // console.log(book.saleInfo.retailPrice.amount);
  return (
    <div className="card text-center mt-5" style={{ width: "17rem" }}>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        className="card-img-top"
        alt="Image not found..."
      />
      <div className="card-body">
        <h5 className="card-title">{book.volumeInfo.title}</h5>
        <p className="card-text">
          by{" "}
          {!book.volumeInfo.authors
            ? "unknown"
            : book.volumeInfo.authors.join(", ")}
        </p>

        <p className="card-text">
          
        </p>

        <div className="card-footer d-flex justify-content-between">
          <a
            target={"_blank"}
            href={`${book.saleInfo.buyLink}`}
            className="btn btn-success px-4"
          >
            Buy
          </a>
          <Link
            to={`/${book.id}`}
            onClick={getData}
            className="btn btn-primary px-4"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
