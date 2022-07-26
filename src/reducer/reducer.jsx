import React from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: payload,
      };

    case "SET_DETAIL":
      return {
        ...state,
        details: payload,
      };

    case "CHANGE_BOOK":
      return {
        ...state,
        search: payload
      };

    default:
      return state;
  }
};

export default reducer;
