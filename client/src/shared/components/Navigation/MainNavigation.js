import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const sideDrawerStateHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  // useEffect(() => {
  //   console.log(`Current State: ${drawerIsOpen}`);
  // }, [drawerIsOpen]);

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={sideDrawerStateHandler} />}
      <SideDrawer onClick={sideDrawerStateHandler} show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={sideDrawerStateHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
