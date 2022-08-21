import React from "react";
import { qtyDecrease } from "../Redux/shopping/actions";
import { useDispatch } from "react-redux";

function QtyDecrease({ id }) {
  const Dispatch = useDispatch();
  const removeToCartHandler = () => Dispatch(qtyDecrease({ id }));
  return (
    <button
      onClick={removeToCartHandler}
      className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokelinecapjoin="round"
          strokeWidth="2"
          d="M18 12H6"
        />
      </svg>
    </button>
  );
}

export default QtyDecrease;
