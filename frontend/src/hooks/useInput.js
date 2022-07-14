import axios from "axios";
import { useId, useState } from "react";

const useInput = (options, check, ...payload) => {
  //destructure options
  const {
    label,
    type,
    name,
    defaultValue,
    required,
    accept,
    className,
    onChange,
    pattern,
  } = options;

  //get random id
  const id = useId();

  //set initial value (fix err in console)
  let initValue = defaultValue
    ? defaultValue
    : typeof defaultValue == "boolean"
    ? defaultValue
    : "";

  //value state
  const [value, setValue] = useState(initValue);

  //handle value change event
  const handleChange = (e) => {
    if (onChange) onChange(e);

    //checkbox
    if (type === "checkbox") return setValue(e.target.checked);

    //image
    if (type === "file") return setValue(e.target.files[0]);

    setValue(e.target.value);
  };

  //clear value
  const clearValue = () => {
    setValue("");
  };

  //run value checks [ MUST IMPROVE THIS WITH ERROR HANDLING]
  const isValid = () => {
    if (typeof value == "boolean") return true; //if boolean return true

    if (!value && required) {
      return false;
    } //check if value is null/empty

    if (!check) return true;

    return check(value, ...payload); //returns check function with value and payload passed to it
  };

  const placeholder = `${label}`;

  //for images only

  const handleSaveImg = async () => {
    const apiLink = "https://api.cloudinary.com/v1_1/drdyt9nkv/image/upload/";

    if (!value) return;

    try {
      const formData = new FormData();
      formData.append("file", value);
      formData.append("upload_preset", "default_preset");

      const { data } = await axios.post(apiLink, formData);
      setValue(data.url);
    } catch (err) {
      console.log(err);
    }
  };

  const getInput = () => (
    <input
      key={id}
      className={className}
      placeholder={placeholder}
      type={type}
      value={type === "file" ? null : value} //adding support for images
      name={name}
      accept={accept}
      onChange={handleChange}
      pattern={pattern}
    />
  );

  return {
    id,
    label,
    type,
    name,
    placeholder,
    value,
    handleChange,
    handleSaveImg,
    clearValue,
    isValid,
    setValue,
    getInput,
  };
};

export default useInput;
