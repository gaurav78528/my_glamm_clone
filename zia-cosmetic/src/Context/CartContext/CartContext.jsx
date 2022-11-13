import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addQTY = (id) => {
    const mappedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id) cartItem.qty += 1;
      return cartItem;
    });
    setCartItems(mappedCartItems);
  };

  const getTotalAmount = () => {
    const sum = cartItems.reduce((acc, { qty, price }) => qty * price + acc, 0);
    return sum;
  };

  const removeQTY = (id) => {
    const mappedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id) cartItem.qty -= 1;
      return cartItem;
    });
    setCartItems(mappedCartItems);
  };

  const addToCart = (item) => {
    const isInCart = cartItems.find(({ id }) => item.id === id);
    if (isInCart) return;
    setCartItems((prev) => [...prev, { ...item }]);
  };

  const removeFromCart = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  const value = {
    addToCart,
    getTotalAmount,
    addQTY,
    removeQTY,
    cartItems,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
