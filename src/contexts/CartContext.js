import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTotalItem, setCartTotalItem] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [compareItems, setCompareItems] = useState([]);
  // useEffect(() => {}, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1);
  };

  const updateCartItem = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
    item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
  );
  setCartItems(updatedCartItems);
  calculateTotalPrice();
};

const addToCompare = (product) => {
  setCompareItems([...compareItems, product]);
};

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalPrice = () => {
    
    const totalPrice = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0,
    );
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
    setCartTotalItem(cartItems.length);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        calculateTotalPrice,
        setTotalPrice,
        cartCount,
        cartTotalItem,
        addToCompare
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };