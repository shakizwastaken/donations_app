import { useState } from "react";
import useInput from "./useInput";

export const useDonateAmmounts = (
  donationAmmounts,
  ammount_className,
  custom_className
) => {
  const [value, _setValue] = useState(0); //selected ammount

  const [current, _setCurrent] = useState(0);

  //custom value input change handler
  const _handleCustom = (e) => {
    _setCurrent(-1);
    _setValue(Number.parseInt(e.target.value));
  };

  //custom value input object
  const customInput = useInput({
    label: "custom",
    className: custom_className,
    type: "number",
    required: false,
    onChange: _handleCustom,
  });

  //clear value
  const clearValue = () => {
    _setValue(0);
    _setCurrent(0);
  };

  //render ammounts
  const renderAmmounts = () =>
    donationAmmounts.map((ammount, index) => {
      //function to handle click
      const handleClick = () => {
        //value
        _setValue(ammount);
        _setCurrent(index);
      };

      return (
        <button
          key={index}
          className={`${ammount_className} ${
            current === index && "current_ammount"
          }`}
          onClick={handleClick}
        >
          {ammount}$
        </button>
      );
    });

  return {
    value,
    _setValue,
    current,
    _setCurrent,
    customInput,
    renderAmmounts,
    _handleCustom,
    clearValue,
  };
};
