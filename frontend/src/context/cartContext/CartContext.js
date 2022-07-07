import { createContext, useEffect, useReducer } from "react";
import {
  openCart,
  closeCart,
  addItem,
  removeItem,
  setAmmount,
  clearCart,
} from "./CartActions";
import { changeAmmount, createItem, deleteItem } from "./CartFunctions";

const initialState = {
  isOpen: false,
  items: {},
};

const CartReducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case openCart:
      return { ...state, isOpen: true };

    case closeCart:
      return { ...state, isOpen: false };

    case addItem:
      return createItem(
        { ammount: payload.ammount, campaignId: payload.campaignId },
        state
      );

    case removeItem:
      return deleteItem(payload.id);

    case setAmmount:
      return changeAmmount(
        { id: payload.id, newAmmount: payload.newAmmount },
        state
      );

    case clearCart:
      return initialState;

    default:
      return state;
  }
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
