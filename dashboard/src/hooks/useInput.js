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
    if (onChange) return onChange(e);

    //checkbox
    if (type === "checkbox") return setValue(e.target.checked);
    else setValue(e.target.value);
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
    clearValue,
    isValid,
    setValue,
    getInput,
  };
};

export default useInput;
