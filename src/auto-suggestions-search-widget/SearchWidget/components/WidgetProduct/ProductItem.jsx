import React from "react";

const ProductItem = ({ product }) => {
  return (
    <li className="list-item">
      <a href={product.URL}>
        <div className="product-item">
          <div className="product-item--image">
            <img
              src={`https://source.unsplash.com/random/200x200?${product.id}`}
              alt={product.title}
            />
          </div>
          <div className="product-item-info">
            <p>{product.title}</p>
            <p className="product-brand">{product.brand}</p>
            <p>
              <b>${product.price}</b>
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductItem;
