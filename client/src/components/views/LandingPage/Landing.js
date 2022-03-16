// Landing.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  // contacts selector
  const contacts = useSelector((state) => state);
  return (
    <div className="container">
      <div className="col-md-10 mx-auto bord-container">
        <h1>User Information</h1>
        <table className="table table-hover">
          <thead className="text-white bg-dark text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{contact.email}</td>
                <td>{contact.password}</td>
                <td>{contact.name}</td>
                <td>
                  <Link
                    to={`/login/${contact.id}`}
                    className="btn btn-small btn-primary"
                  >
                    Edit
                  </Link>
                  <button type="button" className="btn btn-small btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Landing;
