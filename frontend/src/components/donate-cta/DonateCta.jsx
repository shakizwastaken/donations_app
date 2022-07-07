import "./donateCta.css";

import useInput from "../../hooks/useInput";
import { useState } from "react";

const CtoSection = () => {
  const [value, setValue] = useState(0); //selected ammount

  const [current, setCurrent] = useState(0);

  //custom value input change handler
  const handleCustom = (e) => {
    setCurrent(-1);
    setValue(Number.parseInt(e.target.value));
  };

  //custom value input object
  const customInput = useInput({
    label: "custom",
    type: "number",
    required: false,
    className: "cta_container_custom",
    onChange: handleCustom,
  });

  //available quick donate ammounts
  const donationAmmounts = [10, 50, 100];
  //render ammounts
  const renderAmmounts = () =>
    donationAmmounts.map((ammount, index) => {
      //function to handle click
      const handleClick = () => {
        setValue(ammount);
        setCurrent(index);
      };

      return (
        <button
          key={index}
          className={`btn cta_container_btn cta_container_ammount ${
            current === index && "current"
          }`}
          onClick={handleClick}
        >
          {ammount}$
        </button>
      );
    });

  return (
    <div className="cta_section ">
      <h1 className="cta_section_header">“We rise by helping others.”</h1>

      <div className="cta_container">
        <h2 className="cta_container_header">
          Every donation is going straight to the people in need for it !
        </h2>

        <div className="cta_container_form">
          {renderAmmounts()}

          {customInput.getInput()}

          <button className="btn cta_container_btn cta_container_submit hover_up">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtoSection;
