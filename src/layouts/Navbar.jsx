import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../reducer/context";
import "../styles/index.css";

const Navbar = () => {
  const { liked } = useContext(MainContext);
  return (
    <>
      <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand">Search Book</a>
          <div>
            <Link to={`/liked`} className="text-decoration-none text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill text-danger"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>{" "}
              Liked Books{" "}
              {liked.length > 0 ? `(${liked.length})` : ""}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
