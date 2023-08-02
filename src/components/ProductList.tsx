import React, { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Fetch products from the API
      fetchProducts();
    }, []);
  
    // Function to fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/v1/products"); // Replace with your API endpoint URL
        const data = await response.json();
        setProducts(data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              {/* Add more product details here */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;
  