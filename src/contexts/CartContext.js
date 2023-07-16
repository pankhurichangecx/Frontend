import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {}, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const updateCartItem = (productId, quantity) => {
  const updatedCartItems = cartItems.map((item) =>
    item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
  );
  setCartItems(updatedCartItems);
  calculateTotalPrice();
};


  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalPrice = () => {
    
    const totalPrice = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * 1,
      0
    );
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };