import "./cart.css";

import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import { closeCart } from "../../context/cartContext/CartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { isOpen, items, dispatch } = useContext(CartContext);
  const state = useContext(CartContext);

  function handleClose() {
    dispatch({ type: closeCart });
  }

  const handleEsc = (e) => {
    if (isOpen === true) handleClose();
  };

  useEffect(() => {
    document.addEventListener("keypress", handleEsc);
    return document.removeEventListener("keypress", handleClose);
  }, []);

  return (
    <div className={`cart ${isOpen ? "cart-open" : "cart-closed"}`}>
      <div className="cart-close_icon" onClick={handleClose}>
        <FontAwesomeIcon icon={faX} />
      </div>
    </div>
  );
};

export default Cart;
