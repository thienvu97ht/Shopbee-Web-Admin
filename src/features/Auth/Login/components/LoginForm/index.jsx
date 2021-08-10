import React, { useState } from "react";
import { Link } from "react-router-dom";

LoginForm.propTypes = {};

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onSubmit } = props;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const values = {
      username,
      password,
    };
    onSubmit(values);
  };

  return (
    <div className="container mt-30">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="text-center">Login</h2>
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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              <Link to="/register">Create new account</Link>
              <br />
              <Link to="/forgot-password">Forgot Password</Link>
            </p>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
