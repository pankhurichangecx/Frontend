/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/contexts/CartContext";
import { ProductContext } from "@/contexts/ProductContext";
// import { ProductContext } from "@/contexts/ProductContext";
import Chat from "./Chat";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Icons from "./SideIcons";
import React, { useContext } from 'react';
// import Image from "next/image";
import img1 from "./../images/img1.webp"
import img2 from "./../images/img2.webp"
import img3 from "./../images/img3.webp"
import img4 from "./../images/img4.webp"

export default function Comparison() {
  const { compareItems, removeFromCompare } = useContext(CartContext) 
  const { setProductData } = useContext(ProductContext) 

  const compareItems = [
    {
      id: 1,
      image: { url: img1 },
      name: "Product 1",
      price: 40.00,
      Sale: "True",
      quantity: 1,
      Brand: "A",
      rating: "9⭐",
      material: "Cotton"
     
    },
    {
      id: 2,
      image: { url: img2 },
      name: "Product 2",
      price: 25.00,
      Sale: "False",
      quantity: 1,
      Brand: "D",
      rating: "7⭐",
      material: "Cotton"
     
    },
    {
      id: 3,
      image: { url: img3 },
      name: "Product 3",
      price: 79.00,
      Sale: "False",
      quantity: 1,
      Brand: "A",
      rating: "9.5⭐",
      material: "Cotton"

    },
    {
      id: 4,
      image: { url: img4 },
      name: "Product 4",
      price: 100.00,
      Sale: "False",
      quantity: 1,
      Brand: "B",
      rating:"10⭐",
      material: "Cotton"
   
    },
  ]

  return (
    <>
    <div className="lg:px-16 lg:py-7 px-6 py-2">
        <div className="mb-7"><Navbar /></div>
        <Icons />
        <Chat />
        <div>
            <div>
                <div>
                  <h1 className="text-xl font-semibold mb-2">Comparison</h1>
                  
                    <div className="flex gap-28 mb-10 bg-gray-400 h-10 p-2">
                      <h1 className="font-bold">Specifications</h1>
                      
                      <div className="font-semibold mb-10">Name</div>
                      <div className="font-semibold mb-10">Price</div>
                      <div className="font-semibold mb-10">Brand</div>
                      <div className="font-semibold mb-10">Material</div>
                      <div className="font-semibold mb-10">Ratings</div>
                      {/* <hr className="border border-black w-full"/> */}
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-10 ml-48">
                    {compareItems.map((item) => {
                      return (
                      <>
                        {/* <div>{item.url}</div> */}
                        <div className="ml-6">{item.name}</div>
                        <div className="">{item.price}</div>
                        <div className="-ml-10">{item.Brand}</div>
                        <div className="-ml-20">{item.material}</div>
                        <div className="-ml-20">{item.rating}</div>
                      </>
                      );
                      })}
                </div>    
                </div>  
              </div>
            </div>

                

           
        <Footer />
    </div>
    </>
  );
};