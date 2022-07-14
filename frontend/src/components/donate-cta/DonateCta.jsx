import "./donateCta.css";
import { useDonateAmmounts } from "../../hooks/useAmmounts";

import { CartContext } from "../../context/cartContext/CartContext";
import { useContext } from "react";
import { addItem, openCart } from "../../context/cartContext/CartActions";

const DonateCta = () => {
  const { renderAmmounts, customInput, value, clearValue } = useDonateAmmounts(
    [50, 100, 200],
    "btn cta_container_btn cta_container_ammount",
    "cta_container_custom"
  );

  const { dispatch } = useContext(CartContext);

  const handleDonate = () => {
    dispatch({
      type: addItem,
      payload: {
        ammount: value,
        campaignId: -1,
        campaignTitle: "Quick donation",
        campaignImg: null,
      },
    });

    clearValue();

    dispatch({ type: openCart });
  };

  return (
    <div className="cta_section ">
      <h1 className="cta_section_header">Quick Donate:</h1>

      <div className="cta_container">
        <h2 className="cta_container_header">
          Every donation is going straight to the people in need for it !
        </h2>

        <div className="cta_container_form">
          {renderAmmounts()}

          {customInput.getInput()}

          <button
            className="btn cta_container_btn cta_container_submit hover_up"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCta;
