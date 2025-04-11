/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };
  const addToCart = (item, quantity) => {
    console.log(cart);
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.item.id === item.id) {
          return {
            item: cartElement.item,
            quantity: cartElement.quantity + quantity,
          };
        } else {
          return cartElement;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter(
      (cartElement) => cartElement.item.id !== itemId
    );
    setCart(newCart);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, element) => acc + element.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (acc, element) => acc + element.item.price * element.quantity,
      0
    );
  };

  const modifyAmount = (itemId, newQuantity) => {
    const newCart = cart.map((cartElement) => {
      if (cartElement.item.id === itemId) {
        return { ...cartElement, quantity: newQuantity };
      } else {
        return cartElement;
      }
    });
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        clear,
        removeItem,
        totalQuantity,
        totalPrice,
        modifyAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
