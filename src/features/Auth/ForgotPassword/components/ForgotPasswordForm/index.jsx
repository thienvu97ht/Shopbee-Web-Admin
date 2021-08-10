import React, { useState } from "react";

ForgotPassWordForm.propTypes = {};

function ForgotPassWordForm(props) {
  const [email, setEmail] = useState("");
  const { onSubmit } = props;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const values = {
      email,
    };
    onSubmit(values);
  };

  return (
    <div className="container mt-30">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="text-center">Forgot Password</h2>
        </div>
        <div className="panel-body">
          <form onSubmit={onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success">
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassWordForm;
