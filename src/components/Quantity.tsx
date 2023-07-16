import React, { useState } from 'react';

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center">
      <button
        className="px-3 py-1 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700 rounded-l"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="px-3 py-1 bg-gray-100 text-gray-700">{quantity}</span>
      <button
        className="px-3 py-1 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700 rounded-r"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">My cart</h1>
      <hr className="h-4 bg-gray-500 border-0 mb-4" />
      <div className="flex py-4">
        <div className="w-20">
          <img src="https://i.ibb.co/4KRWTkZ/Bonkerscorner-Rocking-tee-07-1.jpg"/>
        </div>
        <div className="ml-2">
          <div className="text-sm">I&apos;m a product</div>
          <div>$31.00</div>
          <div className="text-sm text-gray-500">Size: Medium</div>
        </div>
        <QuantityControl
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
    </div>
  );
};

export default CartItem;
