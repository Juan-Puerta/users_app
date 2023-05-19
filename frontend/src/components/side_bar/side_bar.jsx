import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FileSearchOutlined } from "@ant-design/icons";
//import Logo from "../../assets/images/logo.png";
import "./side_bar.css";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <div className="div-sub-logo">
          <h3 className="sub-logo">User App</h3>
        </div>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FileSearchOutlined />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
