import React, { useContext } from "react";
import { MainContext } from "../reducer/context";
import { Link, useNavigate } from "react-router-dom";

const LikedList = () => {
  const { liked, filterFromLiked } = useContext(MainContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="content container">
      <button className="btn btn-primary goBack" onClick={goBack}>
        Go Back
      </button>
      {liked.length ? (
        liked.map((item, idx) => {
          if (item.liked === true) {
            return (
              <div
                className="card text-center mt-5"
                key={idx}
                style={{ width: "17rem" }}
              >
                <div className="image" style={{ position: "relative" }}>
                  <div className="icons">
                    <div className="dflex">
                      <button
                        onClick={() => filterFromLiked(item.id)}
                        className="btn btn-danger"
                      >
                        Remove From Liked
                      </button>
                    </div>
                  </div>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Image not found..."
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    by {!item.authors ? "unknown" : item.authors.join(", ")}
                  </p>

                  <div className="card-footer d-flex justify-content-between">
                    <a
                      target={"_blank"}
                      href={`${item.buyLink}`}
                      className="btn btn-success px-4"
                    >
                      Buy
                    </a>
                    <Link to={`/${item.id}`} className="btn btn-primary px-4">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div
          style={{ textAlign: "center", marginTop: "10rem" }}
          className="m-auto"
        >
          <h3>No Liked Books</h3>
        </div>
      )}
    </div>
  );
};

export default LikedList;
