import "./login.css";

import { useContext, useState } from "react";
import useInput from "../../hooks/useInput";
import { AuthContext } from "../../context/auth/AuthContext";

import axios from "axios";
import {
  login_failed,
  login_pending,
  login_start,
  login_success,
} from "../../context/auth/constants";
import { getApi } from "../../utils/apiLink";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const email = useInput({ label: "email", type: null }, (value) => {
    return true;
  });

  const password = useInput(
    {
      label: "password",
      type: "password",
    },
    (value, email) => {
      return value !== email;
    },
    email.value
  );

  const [error, setError] = useState("");

  const inputs = [email, password];

  const validateInputs = () => inputs.every(({ isValid }) => isValid());

  const tryLogin = async () => {
    //set state to start
    dispatch({ type: login_start });

    try {
      //change state status to pending
      dispatch({ type: login_pending });

      //query to backend to login
      const res = await axios.post(
        getApi("/auth/login"),
        {
          email: email.value,
          password: password.value,
        },
        { withCredentials: true }
      );

      //set state to success and set user data
      dispatch({ type: login_success, payload: res.data });

      //clear errors
      setError(false);
    } catch (err) {
      //set status to error and change state to error
      dispatch({ type: login_failed, payload: err.response.data });

      //set error
      setError(err.response.data.msg);
    }
  };

  //render inputs
  const renderInputs = () => {
    return inputs.map(({ label, type, value, handleChange }, index) => (
      <div key={index} className="login_input">
        <label>{label}</label>

        <input type={type} onChange={handleChange} value={value}></input>
      </div>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    //axios login request
    await tryLogin();
  };

  return (
    <div className="login">
      <h1 className="login_header">Login Dashboard</h1>

      {error && (
        <div className="login_error">
          <p>{error}</p>
        </div>
      )}

      <form className="login_form" onSubmit={handleSubmit}>
        {renderInputs()}

        <button className="login_btn">Login</button>

        <span className="login_forgot">forgot password ?</span>
      </form>
    </div>
  );
};

export default Login;
