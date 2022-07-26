import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById } from "../actions";
import { MainContext } from "../reducer/context";

const Details = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const {details, setDetails} = useContext(MainContext);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getById(id).then((data) => setDetails(data.volumeInfo));
  }, [id]);
  let thumbnail = details.imageLinks && details.imageLinks.smallThumbnail;

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
            <b>{details.title}</b>
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Author(s): {!details.authors ? "unknown" : details.authors.join(", ")}
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Publisher: {details.publisher}
            <span> published on {details.publishedDate}</span>
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            The details has {details.pageCount} pages
          </p>
          <div id='description'>{details.description}</div>
          <a className="btn btn-success mt-3" href={details.previewLink}>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
