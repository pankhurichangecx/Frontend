// import  React, { useState } from "react";
import Chat from "./Chat";
import Footer from "./Footer";
import { ImgComponent } from "./Images";
import Navbar from "./NavBar";
import Icons from "./SideIcons";
import { ProductProvider } from './../contexts/ProductContext';

// import ImageCarousel from "./Carousel";
// import ProductComparison from "./comparision";

export default function Plp() {
  
  return (
    <>
    <ProductProvider>
      <div className="lg:px-16 lg:py-7 px-6 py-2">
        <Navbar />
        <Icons />
        <Chat />

        <div>
          <center>
            <div className="text-center p-10">
              <span className="uppercase decoration-24 underline-offset-[-0.25rem] lg:text-6xl text-4xl">
                Women
              </span>
            </div>
          </center>
        </div>
      </div>
      <ImgComponent />
      {/* <ProductComparison/> */}
      <Footer />
      {/* <ImageCarousel /> */}
      </ProductProvider>
    </>
  );
};


