import React, { useContext } from "react";
import { CartContext } from "./../contexts/CartContext";

import Image from "next/image";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Sample from "./Quantity";
import Product from "@/contexts/ImageMap";

export default function Addcart() {
  const { removeFromCart, cartItems, totalPrice } = useContext(CartContext);
  const value = useContext(Product);
  const product = value.productData;

  const cancelOrder = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <div className="mx-14 my-5">
        {/* <!-- navbar start here  -->*/}
        <Navbar />

        {/* <!-- checkout cart start here. --> */}
        <div className="mt-16 w-full lg:mx-52 lg:w-3/4">
          <div className="flex flex-wrap gap-5">
            <div className="w-1/2">
              <span>My Cart</span>
              <hr className="border-t-2 border-gray-600 my-1" />
              {cartItems?.map((item, idx) => (
                <div key={idx} className="flex mt-6">
                  <Image
                    src={item.image.url.src}
                    width={100}
                    height={100}
                    alt="image"
                  />

                  <div className="ml-6 text-sm">
                    <p>{item.name}</p>
                    <p className="mt-4">{"$" + item.price.toFixed(2)}</p>
                  </div>

                  <div className="ml-10">
                    <Sample />
                  </div>

                  <div className="ml-10">
                    <p>{"$" + item.price.toFixed(2)}</p>
                  </div>

                  <div className="ml-10">
                    <button
                      className="text-black bg-transparent border-none"
                      onClick={() => cancelOrder(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 
                            4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414
                            4.95-4.95-4.95-4.95L7.05 5.636z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <span>Order Summary</span>
              <hr className="border-t-2 border-gray-600 my-1" />

              <div className="flex pt-8">
                <span className="font-extralight mr-auto">
                  Subtotal
                </span>
                <span>{"$" + totalPrice.toFixed(2)}</span>
              </div>

              <div className="pt-4">
                <span className="font-extralight underline">
                  Estimate Shipping
                </span>
              </div>
              <hr className="border-t-2 border-gray-600 my-1" />

              <div className="flex pt-5">
                <span className="font-semibold mr-auto">Total</span>
                <span className="font-semibold">
                  {"$" + totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="mt-6">
                <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid">
                  Checkout
                </button>
              </div>

              <div className="flex items-center mt-2 px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
                <span className="ml-2 font-medium">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- footer start here  --> */}
        <Footer />
      </div>
    </>
  );
}