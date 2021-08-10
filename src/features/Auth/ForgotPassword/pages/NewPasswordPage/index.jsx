import authenApi from "api/authen";
import React from "react";
import { useHistory } from "react-router-dom";
import NewPasswordForm from "../../components/NewPasswordForm";

NewPasswordPage.propTypes = {};

function NewPasswordPage(props) {
  const history = useHistory();

  const handleNewPasswordFormSubmit = (values) => {
    const newPasswordApp = async () => {
      const res = await authenApi.newPassword(values);
      console.log(res);
      if (res.status !== 1) {
        alert(res.message);
      } else {
        history.push("/login");
      }
    };

    newPasswordApp();
    console.log(values);
  };

  return <NewPasswordForm onSubmit={handleNewPasswordFormSubmit} />;
}

export default NewPasswordPage;
