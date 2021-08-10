import React, { useState } from "react";

function NewPasswordForm(props) {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onSubmit } = props;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const values = {
        otp,
        password,
      };
      onSubmit(values);
    } else {
      alert("Mật khẩu không khớp");
    }
  };

  return (
    <div className="container mt-30">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="text-center">New Password</h2>
        </div>
        <div className="panel-body">
          <form onSubmit={onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="otp">Mã xác thực</label>
              <input
                type="number"
                className="form-control"
                id="otp"
                name="otp"
                placeholder="Nhập mã xác thực"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                name="password"
                placeholder="Nhập mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd-confirm">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="pwd-confirm"
                name="confirm_password"
                placeholder="Xác nhận lại mật khẩu"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordForm;
