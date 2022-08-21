import React from "react";
import AddToCart from "./AddToCart";

function ProductItem({ item }) {
  const { id, name, stockLimit, price } = item;
  return (
    <div id={id} className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div className="flex justify-between px-4 items-center">
        <div className="text-lg font-semibold">
          <p>
            {name} ({stockLimit})
          </p>
          <p className="text-gray-400 text-base">Tk {price}</p>
        </div>
        <div className="text-lg font-semibold">
          <AddToCart
            id={id}
            name={name}
            price={price}
            stockLimit={stockLimit}
            itemQty={1}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
