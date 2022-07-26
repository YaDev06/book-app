import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById } from "../actions";

const Details = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState([]);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getById(id).then((data) => setBook(data.volumeInfo));
  }, [id]);
  let thumbnail = book.imageLinks && book.imageLinks.smallThumbnail;


  
  var targetDiv = document.getElementById("description");
  targetDiv.appendChild(document.createTextNode(book.description));
  return (
    <div className="content">
      <button className="btn btn-primary goBack" onClick={goBack}>
        Go Back
      </button>
      <div className="row container my-3 g-5">
        <div className="col-lg-3 col-sm-6">
          <img
            className="img-fluid w-100"
            src={thumbnail}
            alt="image not found"
          />
        </div>
        <div className="col-lg-9 col-sm-6 mt-5 ">
          <div style={{ fontSize: "1.5rem" }} className="text-center mb-3">
            <b>{book.title}</b>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Author(s): {!book.authors ? "unknown" : book.authors.join(", ")}
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Publisher: {book.publisher}
            <span> published on {book.publishedDate}</span>
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            The book has {book.pageCount} pages
          </p>
          <div id='description'></div>
          <a className="btn btn-success mt-3" href={book.previewLink}>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
