import { useContext } from "react";
import { addItem, openCart } from "../../context/cartContext/CartActions";
import { CartContext } from "../../context/cartContext/CartContext";
import { useDonateAmmounts } from "../../hooks/useAmmounts";
import "./campaignDonate.css";

const CampaignDonate = ({ campaignId, campaignTitle, campaignImg }) => {
  const { renderAmmounts, customInput, value, clearValue } = useDonateAmmounts(
    [50, 100, 200],
    "btn campaignDonate_container_ammount",
    "campaignDonate_container_custom"
  );

  const { dispatch } = useContext(CartContext);

  const handleDonate = () => {
    dispatch({
      type: addItem,
      payload: { ammount: value, campaignId, campaignTitle, campaignImg },
    });

    clearValue();

    dispatch({ type: openCart });
  };

  return (
    <div className="campaignDonate">
      <div className="campaignDonate_btns">
        {renderAmmounts()}
        {customInput.getInput()}
      </div>
      <button
        className="btn cta_container_btn hover_up campaignDonate_submit"
        onClick={handleDonate}
      >
        Donate
      </button>
    </div>
  );
};

export default CampaignDonate;
