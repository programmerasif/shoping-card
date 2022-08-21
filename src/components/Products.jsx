import React from "react";
import ProductItem from "../components/ProductItem";

function Products({ items }) {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {items.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
}

export default Products;
