import { useState } from "react";
import "../styles/index.css";
const Navbar = (props) => {
  const [search, setSearch] = useState("");

  const changeBook = (e) => {
    setSearch(e.target.value);
  };

  const clickDown = (e) => {
    if (e.key === "Enter") {
      props.searchBar(search);
      setSearch("");
    }
  };
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand">Search Book</a>
        <input
          style={{
            maxWidth: "40%",
          }}
          value={search}
          className="form-control me-2 mr-3"
          type="search"
          placeholder="Search a book name or author(s)"
          aria-label="Search"
          onChange={changeBook}
          onKeyDown={clickDown}
        />
      </div>
    </nav>
  );
};

export default Navbar;
