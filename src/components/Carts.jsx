import React from "react";
import CartItems from "./CartItem";
import TotalItems from "../components/TotalItems";
import TotalPrice from "../components/TotalPrice";

function Carts({ items, totalItem, totalPrice }) {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {items.map((cart) => (
          <CartItems
            key={cart.id}
            id={cart.id}
            name={cart.name}
            price={cart.price}
            stockLimit={cart.stockLimit}
            itemQty={cart.itemQty}
          />
        ))}

        <TotalItems totalItem={totalItem} />
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}

export default Carts;
