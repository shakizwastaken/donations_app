import "./mailCollect.css";

import useInput from "../../hooks/useInput";

const MailCollect = () => {
  const inputs = [
    {
      ...useInput({
        label: "First name",
        type: "text",
        required: true,
        className: "mailCollect_item mailCollect_input",
      }),
    },
    {
      ...useInput({
        label: "Last name",
        type: "text",
        required: true,
        className: "mailCollect_item mailCollect_input",
      }),
    },
    {
      ...useInput({
        label: "Email",
        type: "text",
        required: true,
        className: "mailCollect_item mailCollect_input",
      }),
    },
  ];

  const renderInputs = () => inputs.map((input) => input.getInput());

  const clearValues = () => {
    inputs.forEach(({ clearValue }) => {
      clearValue();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //submit or add to something idk

    clearValues();
  };

  return (
    <div className="mailCollect_wrapper">
      <h1 className="mailCollect_header">Subscribe to our newsletter</h1>

      <form className="mailCollect" onSubmit={handleSubmit}>
        {renderInputs()}
        <button className="mailCollect_item mailCollect_btn">Submit</button>
      </form>
    </div>
  );
};

export default MailCollect;
