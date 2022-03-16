// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-container">
      <div className="navbar navbar-left">
        <Link to="/" className="navbar-brand ml-3 mx-5">
          React Redux Contact App
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
        <Link to="/signup" className="btn btn-secondary mx-4">
          SignUp
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
