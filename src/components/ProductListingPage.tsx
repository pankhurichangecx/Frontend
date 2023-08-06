import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chat from './Chat';
import Footer from './Footer';
import { ImgComponent } from './Images';
import Navbar from './NavBar';
import Icons from './SideIcons';

export default function Plp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/v1/products');
        setProducts(response.data.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter products with category "Women"
  const womenProducts = products.filter((product) => product.category === 'women');
  console.log(womenProducts);

  return (
    <>
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
     

      {/* Pass the filtered womenProducts to ImgComponent */}
      <ImgComponent products={womenProducts} />
      </div>
      <Footer />
    </>
  );
}
