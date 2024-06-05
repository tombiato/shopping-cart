import { ReactNode } from "react";

export type ShoppingCartProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  //   toggleCart: () => void;
  getItemsQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};
