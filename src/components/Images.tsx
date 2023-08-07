/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import router from "next/router";

export const ImgComponent = () => {
  // const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleData = (productId: any) => {
    // setSelectedProductId(productId);
    router.push(`/pdp?productId=${productId}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page: number) => {
    try {
      const res = await axios.get(`http://127.0.0.1:3000/api/v1/products`, {
        params: {
          page,
          limit: 8,
        },
      });
      setProducts(res.data.data.products);
      setTotalPages(res.data.data.totalPages); // Use totalPages from the API response
      setLoading(false);
    } catch (err) {
      console.error("Error in fetching data: ", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // useEffect(() => {
  //   console.log('Updated products:', products);
  // }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

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
              style={{ height: "300px", width: "500px", objectFit: "cover" }}
              onClick={() => handleData(product._id)}
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

      <div className="flex justify-center mt-4">
        <button
          className="mx-2 px-3 py-1 bg-gray-300"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`mx-2 px-3 py-1 ${
                currentPage === page ? "bg-gray-800 text-white" : "bg-gray-300"
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ),
        )}
        <button
          className="mx-2 px-3 py-1 bg-gray-300"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
