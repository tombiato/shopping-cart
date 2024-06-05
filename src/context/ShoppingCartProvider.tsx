import { useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ShoppingCartProps, CartItem } from "../types/CartTypes";
import { ShoppingCartContext } from "./ShoppingCartContext";

export const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  //   const toggleCart = () => setIsOpen((currentIsOpen) => !currentIsOpen);

  const getItemsQuantity = (id: number): number => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number): void => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      const newCartItems = [
        ...cartItems,
        {
          id,
          quantity: 1,
        },
      ];
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity++;
      setCartItems(newCartItems);
    }
  };

  const decreaseItemQuantity = (id: number): void => {
    // Implement the logic to decrease the quantity of an item
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );
      }
    });
  };

  const removeFromCart = (id: number): void => {
    // Implement the logic to remove an item from the cart
    setCartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getItemsQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};
