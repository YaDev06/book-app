import React, { useContext } from "react";
import { MainContext } from "../reducer/context";

const Cart = () => {
  const { changeModal, order } = useContext(MainContext);
  return (
    <div
      className="bg-success text-light text-center p-2"
      style={{
        position: "fixed",
        top: "4rem",
        right: "1.5rem",
        borderRadius: ".5rem",
        cursor: "pointer",
        gap:'.5rem',
        zIndex: '100',
      }}
      onClick={changeModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-cart3"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      <span style={{ fontSize: ".8rem" }}>
        {order.length}
      </span>
    </div>
  );
};

export default Cart;
