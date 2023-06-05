import React from 'react';
import './nav.css';
import { useSelector, useDispatch } from "react-redux";
import { renameUser } from "../../store/redux";

function Nav() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const token = sessionStorage.getItem("token");

  const handleLogout = () => {
    // Remove token from session storage
    sessionStorage.removeItem('token');
    dispatch(renameUser({firstName: "", lastName: ""}));
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./#/index">
        <img
          className="main-nav-logo-image"
          src="../../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {user.firstName !== "" ? (
          <div>
          <a className="main-nav-item" href="./#/profile">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </a>
          <a className="main-nav-item" href="./#/sign-in" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>Sign Out
          </a>
          </div>
        ) : (
          <a className="main-nav-item" href="./#/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;