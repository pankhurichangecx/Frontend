import { useContext } from "react";
import Product from "@/contexts/ImageMap";
import Link from "next/link";
import Image from "next/image";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.webp";
import img5 from "../images/img5.webp";
import img6 from "../images/img6.webp";
import img7 from "../images/img7.webp";
import img8 from "../images/img8.webp";
import img9 from "../images/img9.webp";

export const Images = [
  {
    id: 1,
    image: { url: img1 },
  },
  {
    id: 2,
    image: { url: img2 },
  },
  {
    id: 3,
    image: { url: img3 },
  },
  {
    id: 4,
    image: { url: img4 },
  },
  {
    id: 5,
    image: { url: img5 },
  },
  {
    id: 6,
    image: { url: img6 },
  },
  {
    id: 7,
    image: { url: img7 },
  },
  {
    id: 8,
    image: { url: img8 },
  },
  {
    id: 9,
    image: { url: img9 },
  },
];

export const ImgComponent = () => {
    const value = useContext(Product);
    const Imgs = value?.state.Imgs;
  
    const handleData = (data) => {
      value?.setProductData(data);
      // console.log(data);
    };
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {Images.map((e, idx: number) => (
        <div key={idx}>
          <Link href="/pdp">
            <Image src={e.image.url} alt="img1" width={288} height={288} className="w-72 h-72 p-1" onClick={() => handleData(e)}/>
              <p className="text-black text-sm">I'm a Product</p>
              <p className="text-orange-600 text-sm">$25.00</p>
          </Link>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
