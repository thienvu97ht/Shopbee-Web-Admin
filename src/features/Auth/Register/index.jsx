import authenApi from "api/authen";
import React from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

function RegisterFeature(props) {
  const history = useHistory();

  const handleRegisterFormSubmit = (values) => {
    const registerApp = async () => {
      const res = await authenApi.register(values);
      if (res.status === 1) {
        history.push("/login");
      } else {
        console.log(res);
      }
    };

    registerApp();
  };

  return <RegisterForm onSubmit={handleRegisterFormSubmit} />;
}

export default RegisterFeature;
