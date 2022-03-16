// SignUp.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  // useState[data]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // Event Handler
  // email
  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  // password
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  // name
  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  // contacts => useSelector(state)
  const contacts = useSelector((state) => state);
  // dispatch
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // [validation test(유효성 검사)]
    // checkEmail find[data]
    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
    // checkPassword find[data]
    const checkPassword = contacts.find(
      (contact) => contact.password === password && contact
    );
    // checkName find[data]
    const checkName = contacts.find(
      (contact) => contact.name === name && contact
    );
    // null => email, password, name
    if (!email || !password || !name) {
      // null => alert('msg')
      return alert("Please fill in all fields!");
    }
    // check email
    if (checkEmail) {
      return alert("This email already Exists!");
    }
    // check Password
    if (checkPassword) {
      return alert("This password already Exists!");
    }
    // check Name
    if (checkName) {
      return alert("This name already Exists");
    }
    // data[obj]
    const data = {
      // id => contacts length / email / password / name
      id: contacts[contacts.length - 1].id + 1,
      email,
      password,
      name,
    };

    // dispatch[action.type]
    dispatch({ type: "SIGNUP", payload: data });
    // success msg
    alert("Successfully SignUp!");
    // success go to home[navigate=>v6]
    navigate("/");
  };

  // rendering
  return (
    <div className="container">
      <h1 className="display-3 my-4">SignUp</h1>
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
              <input
                type="submit"
                value="Create"
                className="btn btn-block btn-dark sign-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
