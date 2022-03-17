// Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../../features/userSlice";
import "./Login.css";

function Login() {
  // dispatch
  const dispatch = useDispatch();
  // useState[email, password, name]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // Event Handler
  const onEmailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onNameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // login response
    dispatch(
      login({
        email: email,
        password: password,
        name: name,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="container">
      <h1 className="display-3 my-4">Login</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={onEmailHandler}
                className="form-control"
              />
            </div>
            <div className="form-group my-5">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordHandler}
                className="form-control"
              />
            </div>
            <div className="form-group my-5">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={onNameHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <Link to="/">
                <button type="button" className="btn btn-dark login-btn">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
