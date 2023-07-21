import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, onCompare }) => {
  const { name, price, description, material, rating, imageUrl} = product;

  return (
    <div className="border p-4 m-2">
      <div className="flex justify-center mb-2">
      <img src={imageUrl} alt={name} style={{ width: '150px' }} />

      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Price: ${price}</p>
      <p>Material: {material}</p>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => onCompare(product)}
      >
        Compare
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired, // Add imageUrl prop type
  }).isRequired,
  onCompare: PropTypes.func.isRequired,
};

export default Product;
