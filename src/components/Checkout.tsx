/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/contexts/CartContext";
import Chat from "./Chat";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Icons from "./SideIcons";
import Quantity from "./Quantity";
import React, { useContext, useEffect, useState } from 'react';
import Order from "./Order";
import axios from "axios";
import router from "next/router";
import Link from "next/link";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const handleAddToOrder = async () => {
    try {
      const productIds = cartItems.data.map((item: any) => item.product._id);
      console.log(productIds);
      // Send a POST request to the backend API to create the order
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/order/",
        {
          products: productIds,
          status: "Processing",
        },
        {
          headers: { authorization: localStorage.getItem("token") },
        },
      );
      console.log("Order created:");
      const clearCartResponse = await axios.delete(
        "http://127.0.0.1:3000/api/v1/cart/clearcart",
        {
          headers: { authorization: localStorage.getItem("token") },
        },
      );
      console.log("Cart cleared:", clearCartResponse.data);

      // Redirect to the order history page
      router.push("/order");
      // router.push("/success");
    } catch (error) {
      console.error("Error in creating a order:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
        } else {
          const res = await axios.get(
            `http://127.0.0.1:3000/api/v1/cart/getallCart/`,
            { headers: { authorization: localStorage.getItem("token") } },
          );

          // cartArray
          // =>[product, cart.quantity, cart._id]
          // console.log(res.data);
          setCartItems(res.data);
        }
      } catch (err) {
        console.error("Error in fetching data: ", err);
      }
    };

    fetchData();
  }, []);

  const calculateTotalPrice = (cartItems) => {
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      const totalPrice = cartItems.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity,
        0,
      );
      setCartTotalPrice(totalPrice);
    } else {
      setCartTotalPrice(0);
    }
  };

  useEffect(() => {
    console.log(cartItems.data);
    calculateTotalPrice(cartItems.data);
  }, [cartItems.data]);


  return (
    <>
    <div className="lg:px-16 lg:py-7 px-6 py-2">
        <div className="mb-7"><Navbar /></div>
        <Icons />
        <Chat />
        <div className="ml-10 lg:grid lg:grid-cols-2 lg:gap-2">
            <div>
                <div>
                  <h1 className="text-xl font-semibold mb-2">My cart</h1>
                  <div>
                  {Array.isArray(cartItems.data) && cartItems.data.length > 0 ? (
                  
                cartItems.data.map((e: any, i: any) => (
                  <React.Fragment key={i}>
                    <Quantity
                      e={e.product}
                      quantity={e.quantity}
                      id={e.id}
                      i={i}
                      // calculateTotalPrice={calculateTotalPrice}
                    />
                  </React.Fragment>
                ))
              ) : (
                <p>No items in the cart.</p>
              )}

                  </div>     
                </div>  

                <hr className="mt-3 w-full mb-3 border-gray-500"/>
                <div className="flex">
                  <div className="w-6"><img src="https://i.ibb.co/F4XSNTm/discount-code.png" alt="discount-code"/></div>
                  <div className="text-orange-500 text-sm">Enter a promo code</div>
                </div>
                <div className="flex mt-1">
                  <div className="w-5"><img src="https://i.ibb.co/1nk4Gym/check.png" alt="discount-code"/></div>
                  <div className="text-orange-500 text-sm">Add a note</div>
                </div>
            </div>

            {/* Second Grid */}
            <div className="lg:ml-16">
                <div className="font-bold text-xl lg:mt-0 mt-10">Order Summary</div>
                <hr className="mt-3 lg:w-96 w-full mb-3 border-gray-500"/>
                <div className="flex">
                    <div>Subtotal</div>
                    <div className="ml-64">{"$" + (cartTotalPrice * 1)}</div>
                </div>
                <div className="mt-2"><u>Estimate Shipping</u></div>
                <hr className="mt-3 lg:w-96 w-full mb-3 border-gray-500"/>
                <div className="flex">
                    <div>Total</div>
                    <div className="ml-72">{"$" + (cartTotalPrice * 1)}</div>
                </div>
                <Link href="/order">
                <button
          className="w-44 bg-orange-500 text-white font-semibold py-2 px-4 
          rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
          hover:border-orange-500 hover:border-solid mt-5 ml-24"
          onClick={() => handleAddToOrder()}
        >
          Checkout
        </button>
        </Link>
        
                <div className="flex mt-2 ml-28">
                    <div className="w-4 mt-1"><img src="https://i.ibb.co/XFZTm2L/lock.png" alt="discount-code"/></div>
                    <Link href="/order"><div className="ml-1">Secure Checkout</div></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  );
};
export default Checkout;