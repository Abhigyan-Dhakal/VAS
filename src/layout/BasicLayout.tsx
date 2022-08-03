import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Styles from "./BasicLayout.module.css";

export const BasicLayout = () => {
  const Styling = (prop: { isActive: boolean }) => {
    const { isActive } = prop;
    return { color: isActive ? "rgb(164, 37, 180)" : "gray" };
  };
  return (
    <div>
      <div className={Styles.navBar}>
        <div>
          <h1 className={Styles.logo}>VAS</h1>
        </div>
        <div className={Styles.navItems}>
          <NavLink style={Styling} to={"/home"}>
            Home
          </NavLink>
          <NavLink style={Styling} to={"/about"}>
            About
          </NavLink>
          <NavLink style={Styling} to={"/patients"}>
            Patients
          </NavLink>
          <NavLink style={Styling} to={"/vaccines"}>
            Vaccines
          </NavLink>
          <NavLink style={Styling} to={"/Appointments"}>
            Appointments
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
