import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onSubmit } = props;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const values = {
        username,
        email,
        fullname,
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
          <h2 className="text-center">Register</h2>
        </div>
        <div className="panel-body">
          <form onSubmit={onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Nhập username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Nhập email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                placeholder="Nhập tên đầy đủ"
                onChange={(e) => setFullname(e.target.value)}
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
            <p>
              <Link to="/login">Login Here</Link>
            </p>
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
