import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import NavbarLogin from "../auth/NavbarLogin";
import Button from "../UI/Button";

import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  const { currentUser, logout} = useAuth();
  const navigate = useNavigate()
  let activeClassName = "active";

  const onLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>TAGregator</div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/mybookmarks"
              className={({ isActive }) =>
                isActive ? activeClassName : "notactive"
              }
            >
              My Bookmarks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytags"
              className={({ isActive }) =>
                isActive ? activeClassName : "notactive"
              }
            >
              My Tags
            </NavLink>
          </li>
      { currentUser && <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClassName : "notactive"
              }
            >
              Dashboard
            </NavLink>
          </li>}
        </ul>
      </nav>
      {currentUser && <Button onClick={onLogout}>Log out</Button>}
      {!currentUser && <NavbarLogin></NavbarLogin>}
    </header>
  );
};

export default MainNavigation;
