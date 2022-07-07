import AddItem from "../../../components/addItem/AddItem";
import useInput from "../../../hooks/useInput";

const AddUser = () => {
  const inputs = {
    firstName: {
      ...useInput({
        label: "firstName",
        type: "text",
        required: true,
      }),
    },
    lastName: {
      ...useInput({
        label: "lastName",
        type: "text",
        required: true,
      }),
    },
    username: {
      ...useInput({
        label: "username",
        type: "text",
        required: true,
      }),
    },
    email: {
      ...useInput({
        label: "email",
        type: "email",
        required: true,
      }),
    },
    password: {
      ...useInput({
        label: "password",
        type: "password",
        required: true,
      }),
    },
    phonenumber: {
      ...useInput({
        label: "phoneNumber",
        type: "phonenumber",
        required: true,
      }),
    },
    isAdmin: {
      ...useInput({
        label: "isAdmin",
        type: "checkbox",
        defaultValue: false,
        required: true,
      }),
    },
  };

  return (
    <>
      <AddItem itemName="user" inputs={inputs} endpoint="/auth/register" />
    </>
  );
};

export default AddUser;
