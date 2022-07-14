import "./cart.css";

import { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import { closeCart, removeItem } from "../../context/cartContext/CartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Cart = () => {
  const { isOpen, items, dispatch } = useContext(CartContext);
  const state = useContext(CartContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleClose() {
    dispatch({ type: closeCart });
  }

  function handleDelete(id) {
    dispatch({ type: removeItem, payload: { id: id } });
  }

  const renderCartItems = () => {
    if (!Object.keys(items).length)
      return <h1 className="cart-noitems">no items to show</h1>;

    return Object.values(items).map(
      ({ id, ammount, campaignTitle, campaignImg }) => {
        return (
          <div className="cart-item-wrapper">
            <div key={id} className="cart-item">
              <div className="cart-item-content">
                <div className="cart-img-container">
                  <img className="cart-img" src={campaignImg} />
                </div>
                <div className="cart-item-details">
                  <h1 className="cart-item-title">{campaignTitle}</h1>
                  <h1 className="cart-item-ammount">
                    ammount: <span>{ammount}</span>
                  </h1>
                </div>
              </div>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        );
      }
    );
  };

  return (
    <div className={`cart ${isOpen ? "cart-open" : "cart-closed"}`}>
      <div className="cart-top">
        <h1 className="cart-header">Donation Cart</h1>

        <div className="cart-close_icon" onClick={handleClose}>
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>

      <div className="cart-items">{renderCartItems()}</div>
    </div>
  );
};

export default Cart;
