import React, { useContext, useEffect } from "react";
import { SearchBook } from "./actions";
import Content from "./component/Content";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Details from "./component/Details";
import Error from "./component/Error/Error";
import { MainContext } from "./reducer/context";
import LikedList from './component/LikedList';

const App = () => {

  const {setBooks} = useContext(MainContext);

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Content searchBar={searchBar} />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/liked" element={<LikedList />} />
        <Route path="/undefined" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
