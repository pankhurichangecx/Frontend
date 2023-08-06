/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import router from 'next/router';


export const ImgComponent = () => {
  // const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
    const handleData = (productId) => {
      // setSelectedProductId(productId);
      router.push(`/pdp?productId=${productId}`); 
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:3000/api/v1/products');
          // console.log(response.data);
          setProducts(response.data.data.products);
          // console.log(products)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // useEffect(() => {
    //   console.log('Updated products:', products);
    // }, [products]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.map((product) => (
          <div key={product._id.$oid} className="relative">
            {product.issale && (
            <span className="bg-orange-500 text-white px-2 absolute top-1 right-1">
              Sale
            </span>
          )}
            <div className="card">
              <img
                src={product.photoUrl}
                className="w-full p-1"
                alt={product.name}
                style={{ height: '300px', width: '500px', objectFit: 'cover' }}
                onClick={()=>handleData(product._id)}
              />
              <div className="card-body">
                <p className="card-title text-orange-600 ml-2">{product.name}</p>
                <p className="card-text text-orange-500 text-sm ml-2">
                 $ {product.price}
                  
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
