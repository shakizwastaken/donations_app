import React from "react";
import useInput from "../../../hooks/useInput";

const AddOrganization = () => {
  const inputs = {
    isAdmin: {
      ...useInput({
        label: "isAdmin",
        type: "checkbox",
        defaultValue: false,
        required: true,
      }),
    },
  };

  return <></>;
};

export default AddOrganization;
