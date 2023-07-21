/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/contexts/CartContext";
import Chat from "./Chat";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Icons from "./SideIcons";
import Quantity from "./Quantity";
import React, { useContext } from 'react';

export default function Checkout() {
    const {cartItems, totalPrice} = useContext(CartContext)

    // useEffect(()=>{
    //   console.log(cartItems)
    // },[cartItems])

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
                    {cartItems.map((e: any, i: any) => {
                      return (
                        <>
                          <Quantity e={e} i={i} />
                        </>
                      );
                    })}
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
                    <div className="ml-64">{"$" + totalPrice}</div>
                </div>
                <div className="mt-2"><u>Estimate Shipping</u></div>
                <hr className="mt-3 lg:w-96 w-full mb-3 border-gray-500"/>
                <div className="flex">
                    <div>Total</div>
                    <div className="ml-72">{"$" + totalPrice}</div>
                </div>
                <div><button className="w-44 bg-orange-500 text-white font-semibold py-2 px-4 
                rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                hover:border-orange-500 hover:border-solid mt-5 ml-24">Checkout</button></div>
                <div className="flex mt-2 ml-28">
                    <div className="w-4 mt-1"><img src="https://i.ibb.co/XFZTm2L/lock.png" alt="discount-code"/></div>
                    <div className="ml-1">Secure Checkout</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  );
};