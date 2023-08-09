/* eslint-disable react/no-string-refs */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Link } from 'react-router-dom';

export default function ProDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { productId } = router.query;

  console.log(productId)

  const [productData, setProductData] = useState([]);

  const handleAddToCart = async (productData) => {
    // addToCart(productData);
    console.log(productData);
    try {
      const token = localStorage.getItem("token");
      // console.log(token);
      if (!token) {
        // Redirect to the login page if the user is not authenticated
        router.push("/login");
      } else {
        const res = await axios.patch(
          `http://127.0.0.1:3000/api/v1/cart/addcart`,
          {
            product: productData._id,
            quantity: productData.quantity,
          },
          { headers: { authorization: localStorage.getItem("token") } },
        );
        console.log(res.status);
        if (res.status == 200) {
          router.push("/checkout");
          console.log("product send to cart add API");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    const fetchProductData = async () => {
      if (productId) {
        try {
          const response = await axios.get(`http://127.0.0.1:3000/api/v1/products/${productId}`);
          console.log(response.data)
          
          if (response.data && response.data.data && response.data.data.product) {
            setProduct(response.data.data.product);
          }
       else {
            console.error('Product data not found:', response.data);
          }
        } catch (error) {
          console.error('Error fetching product data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error('Product ID not found in URL.');
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Add more error handling for product not found scenario
  if (!product._id || !product.name) {
    return <div>Product not found.</div>;
  }


  return (
    <>
  
      <div className="flex flex-wrap mx-14 mr-20 lg:grid lg:grid-cols-2 lg:mx-0 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2">
            <div className="mx-5 sm:mx-20 md:mx-36 lg:mx-32 xl:mx-40 2xl:mx-40 mt-5">
              <div className="sm:flex sm:text-sm md:flex md:text-sm">
                Home/ Women
                <div className=" text-gray-400">/ {product.name}</div>
              </div>
              <div>
              <button className="text-black font-normal px-1 text-xs">
                <span>&lt;</span> Prev
              </button>
              <span className="mx-2"> | </span>
              <button className="text-black font-normal px-1 text-xs">
                Next <span>&gt;</span>
              </button>
            </div>
              <div className="w-auto sm:w-96 md:w-80 lg:w-80 xl:w-80 2xl:w-80 mr-20 mt-5">
                {/* <Link href=""><img src="images/details.jpg" /></Link> */}
                <img src={product.photoUrl} alt={product.name} />
                
                {/* <div className="flex w-52 sm:w-60 mt-5 gap-1 ">
                <div className="mx-2 hover:border-orange-500 border-2"><Link href=""><Image src={productData.image.url} alt={"Image"} /></Link></div>
                <div className="mx-2 hover:border-orange-500 border-2"><Link href=""><Image src={productData.image.url} alt={"Image"} /></Link></div>
                <div className="mx-2 hover:border-orange-500 border-2"><Link href=""><Image src={productData.image.url} alt={"Image"} /></Link></div>
                <div className="mx-2 hover:border-orange-500 border-2"><Link href=""><Image src={productData.image.url} alt={"Image"} /></Link></div>
                <div className="mx-2 hover:border-orange-500 border-2"><Link href=""><Image src={productData.image.url} alt={"Image"} /></Link></div> */}
                
                  {/* Alt code */}
                {/* </div> */}
                <div className="w-96 text-justify text-sm mt-5 lg:w-80">
                I&apos;m aproduct description. I&apos;m a great place to add more
                  details to your product such as sizing, material, care,
                  instructions and cleaning instructions.
                </div>
              </div>
            </div>

            <div className="mx-5 sm:mx-20 md:mx-36 lg:mx-0 xl:mx-0 2xl:mx-0">
              <div className="mt-5 font-semibold text-2xl lg:mt-14">
              {product.name}
              </div>
              <div className="text-sm">SKU:0001</div>
              <div className="flex">
                
                <div className="mt-2 ml-2 text-orange-500">$ {product.price}.00</div>
              </div>
              <p className="text-md mt-1">Color</p>
              <div className="flex">
                <button className="w-4 h-4 bg-red-700 rounded-full mt-1"></button>
                <button className="w-4 h-4 bg-pink-400 rounded-full mt-1 ml-1"></button>
              </div>

              <p className="text-md mt-2">Size</p>
              <div className="relative inline-block mt-2 cursor-pointer">
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" disabled selected hidden>
                    Select Size
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3 5a2 2 0 011.373-.05l4.427 1.348a1 1 0 01.705.976v5.653a1 1 0 01-.705.977L4.373 15.05A2 2 0 013 14V5zm2-.29a1 1 0 00-.683.192l-2.5 1.9A1 1 0 002 8v6a1 1 0 00.19.558l2.5 3A1 1 0 005 18h10a1 1 0 00.81-1.585l-2.5-3A1 1 0 0013 13V8a1 1 0 00-.183-.558l-2.5-1.9a1 1 0 00-.684-.192H5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-md mt-2">Quantity</p>
              <input
                type="number"
                placeholder="1"
                className="border border-black w-14 mt-1 mb-3"
              />

              <br />
              <div className="flex">
              {/* <Link href="/checkout"> */}
                    <button
                      className="w-44 bg-orange-500 text-white font-semibold py-2 px-4 
                  rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500
                  hover:border-orange-500 hover:border-solid"
                  onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  {/* </Link> */}
                <button className="ml-2 border-orange-500 border-2 h-10 w-11 text-black mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" w-10 pl-1 pr-1 mt-0.5 text-orange-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex">
              {/* <Link href="/checkout"> */}
                <button className="bg-black text-center text-white p-2 mt-4 w-64 hover:bg-white hover:text-black hover:border-black hover:border-2">
                  Buy Now
                </button>
              {/* </Link> */}
                {/* <Link href="/compare"> */}
                {/* <button className="bg-black text-center text-white p-2 mt-4 w-64 ml-4 hover:bg-white hover:text-black hover:border-black hover:border-2"
                // onClick={handleAddToCompare}
                >
                  Add to Compare List
                </button> */}
                {/* </Link> */}
              </div>
              <div className="mt-7 mb-4">PRODUCT INFO</div>
              <div className="text-sm w-80 text-justify">
              I&apos;m aproduct description. I&apos;m a great place to add more to
                your product such as sizing, material, care, instructions and
                cleaning instructions. This is also a great space to write what
                makes this product special and how your customes can benifit
                from this item.
              </div>
              <hr className="mt-3 w-80 mb-3" />
              <div className="flex ">
                <div className="ml-2 ">RETURN & RETURN POLICY</div>
                <div className="ml-24 mb-2 text-xl">+</div>
              </div>
              <hr className="mt-3 w-80 mb-3" />
              <div className="flex">
                <div className="ml-2 mr-2">SHIPPING INFO</div>
                <div className="ml-44 mb-2 text-xl">+</div>
              </div>
              {/* <svg style="color: rgb(0, 240, 4);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mt-2 ml-1" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="#00f004"></path> </svg> */}
            </div>
          </div>

    </>
  );
}
