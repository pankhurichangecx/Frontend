import React from "react";
// import Product from "./Product"; // Assuming you have a Product component to display each product
import { products } from "./ProductContext"; // Import the products array from your data file

const ImageMap = () => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ImageMap;
