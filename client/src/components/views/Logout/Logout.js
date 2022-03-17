// Logout.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../features/userSlice";
import "./Logout.css";

function Logout() {
  // user
  const user = useSelector(selectUser);
  // dispatch
  const dispatch = useDispatch();
  // onClick handler
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="logout__container">
      <h1 className="user__name">
        {user}
        <button className="logout__btn" onClick={handleLogout}>
          Logout
        </button>
      </h1>
    </div>
  );
}

export default Logout;
