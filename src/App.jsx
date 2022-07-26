import React, { useEffect, useState } from "react";
import { SearchBook } from "./actions";
import Content from "./component/Content";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Details from "./component/Details";
import Error from "./component/Error/Error";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    SearchBook("react").then((data) => setBooks(data.items));
  }, []);

  const searchBar = (search) => {
    if (search === "") {
      SearchBook("react").then((data) => setBooks(data.items));
    }
    SearchBook(search).then((data) => setBooks(data.items));
  };

  return (
    <>
      <Navbar searchBar={searchBar} />
      <Routes>
        <Route path="/" element={<Content books={books} />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/undefined" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
