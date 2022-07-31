import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../reducer/context";

const Book = ({ book }) => {
  const { addToCart, setLiked } = useContext(MainContext);
  
  return (
    <div className="card text-center mt-5" style={{ width: "17rem" }}>
      <div className="image" style={{ position: "relative" }}>
        <div className="icons">
          <div className="dflex">
            <h5
              className="add-to-cart p-2 bg-primary"
              onClick={() =>
                addToCart({
                  id: book.id,
                  title: book.volumeInfo.title,
                  price: book.saleInfo.listPrice.amount,
                  buyLink: book.saleInfo.buyLink,
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart-plus"
                viewBox="0 0 16 16"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </h5>
            <h5
              className="add-to-cart p-2 bg-primary"
              onClick={() => {
                setLiked({
                  id: book.id,
                  title: book.volumeInfo.title,
                  image: book.volumeInfo.imageLinks.thumbnail,
                  authors: book.volumeInfo.authors,
                  price: book.saleInfo.listPrice.amount,
                  buyLink: book.saleInfo.buyLink,
                });

              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </h5>
            {/* <h5
              className="add-to-cart p-2 bg-primary text-danger"
              onClick={() => {
                setLiked({
                  id: book.id,
                  title: book.volumeInfo.title,
                  image: book.volumeInfo.imageLinks.thumbnail,
                  authors: book.volumeInfo.authors,
                  price: book.saleInfo.listPrice.amount,
                  buyLink: book.saleInfo.buyLink,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </h5> */}
          </div>
        </div>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          className="card-img-top"
          alt="Image not found..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{book.volumeInfo.title}</h5>
        <p className="card-text">
          by{" "}
          {!book.volumeInfo.authors
            ? "unknown"
            : book.volumeInfo.authors.join(", ")}
        </p>

        <p className="card-text"></p>

        <div className="card-footer d-flex justify-content-between">
          <a
            target={"_blank"}
            href={`${book.saleInfo.buyLink}`}
            className="btn btn-success px-4"
          >
            Buy
          </a>
          <Link to={`/${book.id}`} className="btn btn-primary px-4">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
