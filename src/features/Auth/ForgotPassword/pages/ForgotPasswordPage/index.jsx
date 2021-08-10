import authenApi from "api/authen";
import React from "react";
import { useHistory } from "react-router-dom";
import ForgotPassWordForm from "../../components/ForgotPasswordForm";

ForgotPasswordPage.propTypes = {};

function ForgotPasswordPage(props) {
  const history = useHistory();

  const handleLoginFormSubmit = (values) => {
    const forgotPasswordApp = async () => {
      const res = await authenApi.forgotPassword(values);
      console.log(res);
      if (res.status !== 1) {
        alert(res.message);
      } else {
        history.push("/forgot-password/new-password");
      }
    };

    forgotPasswordApp();
  };

  return <ForgotPassWordForm onSubmit={handleLoginFormSubmit} />;
}

export default ForgotPasswordPage;
