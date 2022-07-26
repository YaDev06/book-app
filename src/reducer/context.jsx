import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const MainContext = createContext();

const state = {
  books: [],
  details: [],
  search: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, state);

  value.setBooks = (data) => {
    dispatch({ type: "SET_BOOKS", payload: data });
  };

  value.setDetails = (data) => {
    dispatch({ type: "SET_DETAIL", payload: data });
  };

  value.changeBook = (e) => {
    dispatch({ type: "CHANGE_BOOK", payload: e.target.value });
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
