import React, { useEffect, useState } from "react";
import AddItem from "../../../components/addItem/AddItem";
import useInput from "../../../hooks/useInput";

const AddCampaign = () => {
  const inputs = {
    title: {
      ...useInput({
        label: "title",
        type: "text",
        required: true,
      }),
    },
    description: {
      ...useInput({
        label: "description",
        type: "text",
        required: true,
      }),
    },
    goalSum: {
      ...useInput({
        label: "goalSum",
        type: "number",
        required: true,
      }),
    },
    raisedSum: {
      ...useInput({
        label: "raisedSum",
        type: "number",
        required: true,
      }),
    },
    mainImg: {
      ...useInput({
        label: "mainImg",
        type: "file",
        required: true,
      }),
    },
  };

  const [currentImg, setCurrentImg] = useState();
  const displayImg = () => URL.createObjectURL(inputs.mainImg[0]);

  useEffect(() => {
    if (inputs.mainImg.value) setCurrentImg(displayImg());
  }, [inputs.mainImg.value]);

  return (
    <>
      <AddItem itemName="campaign" inputs={inputs} apiPath="/campaign" />
      <img src={displayImg} alt="displayed img" />
    </>
  );
};

export default AddCampaign;
