import React from "react";
import ProductItem from "./ProductItem";

const WidgetProduct = ({ data }) => {
  return (
    <div className="search-group-item">
      <h3>Products</h3>
      <ul className="group-list">
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default WidgetProduct;
