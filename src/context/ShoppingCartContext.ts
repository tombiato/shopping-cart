import { createContext, useContext } from "react";
import { ShoppingCartContextType } from "../types/CartTypes";

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
