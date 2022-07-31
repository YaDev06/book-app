import React, { useContext } from "react";
import { MainContext } from "../reducer/context";

const Search = (props) => {
  const { search, changeBook } = useContext(MainContext);

  const clickDown = (e) => {
    if (e.key === "Enter") {
      props.searchBar(search);
    }
  };

  const searchNow = () => {
    props.searchBar(search);
  };

  return (
    <div className="container m-auto mt-3 d-flex">
      <input
        className="form-control me-2 mr-3"
        style={{
          backgroundColor: "transparent",
          border: "1px solid rgb(9, 123, 19)",
        }}
        value={search}
        type="search"
        placeholder="Search a book name or author(s)"
        aria-label="Search"
        onChange={changeBook}
        onKeyDown={clickDown}
      />
      <button className="btn btn-outline-success ml-1" onClick={searchNow}>
        Search
      </button>
    </div>
  );
};

export default Search;
