import React from "react";
import { NavLink } from "react-router-dom";
import NavbarLogin from "../auth/NavbarLogin";

import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  let activeClassName = "active";

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
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? activeClassName : "notactive"
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <NavbarLogin></NavbarLogin>
    </header>
  );
};

export default MainNavigation;
