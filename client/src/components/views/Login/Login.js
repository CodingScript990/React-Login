// Login.js
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./Login.css";

function Login() {
  // useParams
  const { id } = useParams();
  // contacts
  const contacts = useSelector((state) => state);
  // currrentContact[id]
  const currrentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  return (
    <div className="container">
      {/* Check user id */}
      {currrentContact ? (
        <>
          <h1 className="display-3 my-4">Login {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form>
                <div className="form-group my-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-dark login-btn"
                  />
                  <Link to="/" className="btn btn-danger mx-3 cancel-btn">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-4">User with id {id} not exists!</h1>
      )}
    </div>
  );
}

export default Login;
