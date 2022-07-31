import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const MainContext = createContext();

const state = {
  books: [],
  details: [],
  order: [],
  liked: [],
  search: "",
  modal: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, state);

  value.addToCart = (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  value.setBooks = (data) => {
    dispatch({ type: "SET_BOOKS", payload: data });
  };

  value.setLiked = (data) => {
    dispatch({ type: "SET_LIKED", payload: data });
  };

  value.filterFromLiked = (id) => {
    dispatch({ type: "FILTER_FROM_LIKED", payload: { id } });
  };

  value.setDetails = (data) => {
    dispatch({ type: "SET_DETAIL", payload: data });
  };

  value.changeBook = (e) => {
    dispatch({ type: "CHANGE_BOOK", payload: e.target.value });
  };

  value.changeModal = (modal) => {
    dispatch({ type: "CHANGE_MODAL" });
  };

  value.remove = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  value.increment = (id) => {
    dispatch({ type: "INCREMENT", payload: { id } });
  };

  value.decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: { id } });
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
