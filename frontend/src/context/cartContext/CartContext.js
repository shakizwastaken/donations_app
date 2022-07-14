import { createContext, useReducer } from "react";
import {
  openCart,
  closeCart,
  addItem,
  removeItem,
  setAmmount,
  clearCart,
} from "./CartActions";
import {
  cartItem,
  changeAmmount,
  createItem,
  deleteItem,
} from "./CartFunctions";

const initialState = {
  isOpen: false,
  items: {
    0: new cartItem(
      0,
      100,
      4,
      "Stray dogs rescue",
      "https://res.cloudinary.com/drdyt9nkv/image/upload/v1657184137/campaigns/strayDogs_zhnn2n.jpg"
    ),
  },
};

const CartReducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case openCart:
      return { ...state, isOpen: true };

    case closeCart:
      return { ...state, isOpen: false };

    case addItem:
      return createItem({ ...payload }, state);

    case removeItem:
      return deleteItem(payload.id, state);

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
