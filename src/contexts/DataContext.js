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
import { useState } from "react";

const ContextProvider = ({children})=>{
    const [productData , setProductData] = useState({})
    const Images = [
        {
          id: 1,
          image: { url: img1 },
          name: "I'm a Product",
          price: 25,
        },
        {
          id: 2,
          image: { url: img2 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 3,
          image: { url: img3 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 4,
          image: { url: img4 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 5,
          image: { url: img5 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 6,
          image: { url: img6 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 7,
          image: { url: img7 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 8,
          image: { url: img8 },
          name: "I'm a Product",
          price: 25.00,
        },
        {
          id: 9,
          image: { url: img9 },
          name: "I'm a Product",
          price: 25.00,
        },
      ];

    return (<Product.Provider value={{state:{Images , productData} , setProductData:setProductData}}> 
        {children}
    </Product.Provider>)
};

export default ContextProvider;