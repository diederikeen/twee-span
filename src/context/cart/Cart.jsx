import React, { createContext, useContext, useState } from "react";
import lscache from "lscache";
import { formatPrice } from "helpers/formatting";

import getTotalCartPrice from "./helpers/getTotalCartPrice";
import getTotalQuantity from "./helpers/getTotalQuantity";

const existingItems = JSON.parse(lscache.get("lineItems"));
const subtotal = lscache.get("subtotal");
const HOUR = 60 * 60 * 1000;

const initialValues = {
  cart: {
    lineItems: existingItems ? existingItems : [],
    totalPrice: getTotalCartPrice(existingItems ? existingItems : 0),
    totalQuantity: getTotalQuantity(existingItems ? existingItems : []),
    subTotal: subtotal ? subtotal : formatPrice(0),
  },
  setPrice: () => {},
  setItems: () => {},
  setSubtotal: () => {},
};

export const CartContext = createContext(initialValues);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    lineItems: existingItems ? existingItems : [],
    totalPrice: getTotalCartPrice(existingItems ? existingItems : 0),
    totalQuantity: getTotalQuantity(existingItems ? existingItems : []),
    subTotal: subtotal ? subtotal : formatPrice(0),
  });

  const setItems = (items) => {
    lscache.set("lineItems", JSON.stringify(items), HOUR);
    setCart((prev) => ({
      ...prev,
      lineItems: items,
      totalPrice: getTotalCartPrice(items),
      totalQuantity: getTotalQuantity(items),
    }));
  };

  const setSubtotal = (int) => {
    const formattedCurrency = formatPrice(int);
    lscache.set("subtotal", formattedCurrency, HOUR);

    setCart((prev) => ({
      ...prev,
      subTotal: formattedCurrency,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setItems,
        setSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setItems, setSubtotal } = useContext(CartContext);
  return {
    cart,
    setItems,
    setSubtotal,
  };
};
