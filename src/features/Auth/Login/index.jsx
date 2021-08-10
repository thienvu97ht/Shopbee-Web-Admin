import authenApi from "api/authen";
import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm";

LoginFeature.propTypes = {};

function LoginFeature(props) {
  const history = useHistory();

  const handleLoginFormSubmit = (values) => {
    const loginApp = async () => {
      const res = await authenApi.checkLogin(values);
      const access_token = res.access_token;
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        history.push("/products");
      }
    };

    loginApp();
  };

  return <LoginForm onSubmit={handleLoginFormSubmit} />;
}

export default LoginFeature;
