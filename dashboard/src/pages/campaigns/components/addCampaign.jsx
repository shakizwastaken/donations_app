import React, { useEffect, useState } from "react";
import AddItem from "../../../components/addItem/AddItem";
import UploadImg from "../../../components/uploadImg/UploadImg";
import useInput from "../../../hooks/useInput";

const AddCampaign = () => {
  //inputs values
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
  };

  return (
    <>
      <AddItem itemName="campaign" inputs={inputs} apiPath="/campaign" />
      <UploadImg />
    </>
  );
};

export default AddCampaign;
