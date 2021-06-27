import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsInCart] = useState([]);

  const addItem = (anItem) => {
    if (itemsCart.filter((items) => anItem.id === items.id).length > 0) {
      alert(`Ya tenes el producto ${anItem.name} en el carrito`);
    } else {
      setItemsInCart([...itemsCart, anItem]);
    }
  };

  const removeItem = (itemID) => {
    setItemsInCart(itemsCart.filter((items) => items.id !== itemID));
  };

  const clear = () => setItemsInCart([]);

  return <CartContext.Provider value={{ itemsCart, addItem, removeItem, clear }}>{children}</CartContext.Provider>;
};
