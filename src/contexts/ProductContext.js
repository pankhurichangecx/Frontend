import Product from "./ImageMap.js";
import img1 from "./../images/img1.webp";
import img2 from "./../images/img2.webp";
import img3 from "./../images/img3.webp";
import img4 from "./../images/img4.webp";
import img5 from "./../images/img5.webp";
import img6 from "./../images/img6.webp";
import img7 from "./../images/img7.webp";
import img8 from "./../images/img8.webp";
import img9 from "./../images/img9.webp";
// import {img1a} from "./../images/img1a.jpg";
// import img1b from "./../images/img1b.jpg";
// import img1b from "./../images/img1c.webp";
// import img1d from "./../images/img1d.webp";
// import img2a from "./../images/img2a.webp";
// import img2b from "./../images/img2b.webp";
// import img2c from "./../images/img2c.webp";
// import img2d from "./../images/img2d.webp";
// import img3a from "./../images/img3a.webp";
// import img3b from "./../images/img3b.webp";
// import img3c from "./../images/img3c.webp";
// import img3d from "./../images/img3d.webp";
// import img4a from "./../images/img4a.webp";
// import img4b from "./../images/img4b.webp";
// import img4d from "./../images/img4d.webp";
// import img8a from "./../images/img8a.webp";
// import img8b from "./../images/img8b.webp";
// import img8c from "./../images/img8c.webp";
// import img8d from "./../images/img8d.webp";
// import mg4c from "./../images/mg4c.jpg";
import React, { useState } from "react";


const ProductContext = React.createContext(null);

const ProductProvider = ({children})=>{
    const [productData , setProductData] = useState({})
    const [compareList, setCompareList] = useState([]);
    // const [quantity, setQuantity] = useState(1)

      // Function to add a product to the comparison list
  const addProductToCompare = (product) => {
    setProductData((prevData) => ({ ...prevData, [product.id]: product }));
  };

  // Function to remove a product from the comparison list
  const removeProductFromCompare = (productId) => {
    setProductData((prevData) => {
      const newData = { ...prevData };
      delete newData[productId];
      return newData;
    });
  };

    const products = [
        {
          id: 1,
          image: { url: img1 },
          name: "Product 1",
          price: 40.00,
          Sale: "True",
          quantity: 1,
          Brand: "A",
          altimg:  {url: img1},
          altimg1: {url: img1},
          altimg2: {url: img1},
          altimg3: {url: img1}
        },
        {
          id: 2,
          image: { url: img2 },
          name: "Product 2",
          price: 25.00,
          Sale: "False",
          quantity: 1,
          Brand: "D",
          altimg: {url: img1},
          altimg1: {url: img1},
          altimg2: {url: img1},
          altimg3: {url: img1}
        },
        {
          id: 3,
          image: { url: img3 },
          name: "Product 3",
          price: 79.00,
          Sale: "False",
          quantity: 1,
          Brand: "A",
          altimg: {url: img1},
          altimg1: {url: img1},
          altimg2: {url: img1},
          altimg3: {url: img1}
        },
        {
          id: 4,
          image: { url: img4 },
          name: "Product 4",
          price: 100.00,
          Sale: "False",
          quantity: 1,
          Brand: "B",
          // altimg: {url: img4a},
          // altimg1: {url: img4b},
          // altimg2: {url: mg4c},
          // altimg3: {url: img4d}
        },
        {
          id: 5,
          image: { url: img5 },
          name: "Product 5",
          price: 25.00,
          Sale: "True",
          quantity: 1,
          Brand: "A",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
        {
          id: 6,
          image: { url: img6 },
          name: "Product 6",
          price: 189.00,
          Sale: "True",
          quantity: 1,
          Brand: "C",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
        {
          id: 7,
          image: { url: img7 },
          name:"Product 7",
          price: 43.00,
          Sale: "False",
          quantity: 1,
          Brand: "C",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
        {
          id: 8,
          image: { url: img8 },
          name: "Product 8",
          price: 99.00,
          Sale: "False",
          quantity: 1,
          Brand: "A",
          // altimg: {url: img8a},
          // altimg1: {url: img8b},
          // altimg2: {url: img8c},
          // altimg3: {url: img8d}
        },
        {
          id: 9,
          image: { url: img9 },
          name: "Product 9",
          price: 299.00,
          Sale: "True",
          quantity: 1,
          Brand: "B",
          // altimg: {url: img1a},
          // altimg1: {url: img1b},
          // altimg2: {url: img1c},
          // altimg3: {url: img1d}
        },
      ];

    return (<ProductContext.Provider value={{products, productData, setProductData}}>
        {children}
    </ProductContext.Provider>)
};

export {ProductProvider, ProductContext};