import React from "react";
import Products from "../components/Products";

import Carts from "../components/Carts";

import { useSelector } from "react-redux";

function Shopping() {
  const shop = useSelector((state) => state.shopping);
  const { products, totalItem, totalPrice, carts } = shop;
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid grid-cols-12 gap-6">
        <Products items={products} />
        <Carts items={carts} totalItem={totalItem} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Shopping;
