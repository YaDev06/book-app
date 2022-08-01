import React from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART": {
      const index = state.order.findIndex((e) => e.id === payload.id);

      let newMass = null;
      if (index < 0) {
        const newOrder = {
          ...payload,
          quantity: 1,
        };
        newMass = [...state.order, newOrder];
      } else {
        newMass = state.order.map((value, idx) => {
          if (idx === index) {
            return {
              ...value,
              quantity: value.quantity + 1,
            };
          } else {
            return value;
          }
        });
      }
      return {
        ...state,
        order: newMass,
      };
    }

    case "SET_BOOKS": {
      return {
        ...state,
        books: payload,
      };
    }

    case "SET_DETAIL": {
      return {
        ...state,
        details: payload,
      };
    }

    case "SET_LIKED": {
      const index = state.liked.findIndex((e) => e.id === payload.id);
      if (index < 0) {
        const newLiked = {
          ...payload,
          liked: true,
        };
        return {
          ...state,
          liked: [...state.liked, newLiked],
        };
      } else {
        if (state.liked[index].liked) {
          return {
            ...state,
            liked: state.liked.filter((e) => e.id !== payload.id),
          };
        }
      }
    }

    case "FILTER_FROM_LIKED": {
      return {
        ...state,
        liked: state.liked.filter((e) => e.id !== payload.id),
      };
    }

    case "CHANGE_BOOK":
      return {
        ...state,
        search: payload,
      };

    case "CHANGE_MODAL": {
      return {
        ...state,
        modal: !state.modal,
      };
    }

    case "REMOVE": {
      return {
        ...state,
        order: state.order.filter((e) => e.id !== payload.id),
      };
    }

    case "INCREMENT": {
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity <= 0 ? 0 : item.quantity - 1,
            };
          } else {
            return item;
          }
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
