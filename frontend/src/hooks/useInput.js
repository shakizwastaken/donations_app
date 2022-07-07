import { useId, useState } from "react";

const useInput = (options, check, ...payload) => {
  const { label, type, required, className, onChange } = options;

  const [value, setValue] = useState("");

  const id = useId();

  //handle value change event
  const handleChange = (e) => {
    if (onChange) onChange(e);
    setValue(e.target.value);
  };

  //clear value
  const clearValue = () => {
    setValue("");
  };

  //run value checks [ MUST IMPROVE THIS WITH ERROR HANDLING]
  const isValid = () => {
    if (!value && required) return false; //check if value is null/empty

    return check(value, ...payload); //returns check function with value and payload passed to it
  };

  const placeholder = `${label}`;

  const getInput = () => (
    <input
      key={id}
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );

  return {
    id,
    label,
    type,
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
