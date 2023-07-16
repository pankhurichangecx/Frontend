import Navbar from "./NavBar";
import Footer from "./Footer";
import Icons from "./SideIcons";
import Chat from "./Chat";
import { ImgComponent } from "./Images";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className="lg:px-16 lg:py-7 px-6 py-2">
        <Navbar />
        <Icons />
        <Chat />

        <div className="bg-orange-600 mt-2 mb-2">
          <center>
            <p className="pt-2 text-white uppercase lg:text-lg text-base text-center tracking-wide font-normal">
              FREE SHIPPING
            </p>
            <p className="pt-2 text-white uppercase lg:text-base text-center text-sm tracking-normal font-normal">
              ON ORDERS OVER $50 - USE COUPON CODE OVER50
            </p>
            <div className="flex justify-center items-center pb-3">
              <button className="border-2 text-white mr-2 p-1 hover:bg-gray-200 hover:text-black">
                Shop Women
              </button>
              <button className="border-2 text-white mr-2 p-1 hover:bg-gray-200 hover:text-black">
                Shop Men
              </button>
              <button className="border-2 text-white mr-2 p-1 hover:bg-gray-200 hover:text-black">
                Shop Sale
              </button>
            </div>
          </center>
        </div>

        <div className="grid lg:grid-cols-7 grid-cols-2 gap-2">
          <div className="lg:col-span-2">
            <Image src="/images/img1.webp" alt="img1" width={300} height={300} className="w-full bg-gray-200" />
          </div>
          <div className="lg:col-span-2">
            <Image src="/images/img2.webp" alt="img2" width={300} height={300} className="w-full bg-gray-200" />
          </div>
          <div className="bg-black w-full col-span-2 lg:col-span-3">
            <Image
              src="/images/img.jpg"
              alt="img3"
              width={1000}
              height={800}
              className="w-full h-96 bg-gray-200"
            />
          </div>
        </div>

        <div>
          <center>
            <div className="text-center p-10">
              <span className="uppercase decoration-24 underline-offset-[-0.25rem] lg:text-6xl text-4xl">
                New Arrivals
              </span>
            </div>
          </center>
        </div>
        <ImgComponent />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
