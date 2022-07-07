import "./addItem.css";

import { useState } from "react";
import axios from "axios";
import { getApi } from "../../utils/apiLink";

const AddItem = ({ itemName, inputs, apiPath }) => {
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  //clear values
  const clearValues = () => {
    Object.values(inputs).forEach(({ clearValue }) => {
      clearValue();
    });
  };

  //check if all values are valid
  const checkValues = () => {
    return Object.values(inputs).every((input) => {
      return input.isValid();
    });
  };

  const handleSubmit = async (e) => {
    //prevent refresh
    e.preventDefault();

    //check values and handle errors
    if (!checkValues()) return setErr("an error has occured");

    //save images
    Object.values(inputs).forEach(async ({ type, handleSaveImg }) => {
      if (type === "file") await handleSaveImg();
    });

    //map inputs values into object and return object
    const getData = () => {
      const data = {};

      Object.entries(inputs).forEach(([key, input]) => {
        if (input.type === "file") {
          data[key] = input.value;
        } else {
          data[key] = input.value;
        }
      });
      return data;
    };

    try {
      const res = await axios.post(getApi(apiPath), getData(), {
        withCredentials: true,
      });

      //clear err
      setErr(false);

      //toggle success msg
      setSuccess(true);
    } catch (err) {
      //print error to console
      console.log(err);

      //set err message
      setErr(err.message);

      //toggle success msg
      setSuccess(false);

      //clear values
      clearValues();
    }
  };

  const renderInputs = () => {
    return Object.values(inputs).map(({ getInput, label }, i) => (
      <div key={i} className="addItem_input">
        <label>{label}</label>
        {getInput()}
      </div>
    ));
  };

  return (
    <div className="addItem">
      <h1 className="addItem_header">create {itemName}</h1>
      <div className="addItem_form">{renderInputs()}</div>
      <div className="addItem_err addItem_msg">{err && err}</div>
      <div className="addItem_success addItem_msg">
        {success && "successfully created user"}
      </div>
      <button className="addItem_submit" onClick={handleSubmit}>
        Save user
      </button>
    </div>
  );
};

export default AddItem;
