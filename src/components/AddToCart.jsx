import React from "react";
import { addToCart } from "../Redux/shopping/actions";
import { useDispatch } from "react-redux";

function AddToCart({ name, price, stockLimit, id, itemQty }) {
  const Dispatch = useDispatch();
  const addToCartHandler = () => {
    Dispatch(addToCart({ itemQty, name, price, stockLimit, id }));
  };
  return (
    <button
      onClick={addToCartHandler}
      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokelinecapjoin="round"
          strokeWidth="2"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
}

export default AddToCart;
