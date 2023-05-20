import React from "react";
import MenuApp from "../components/menu/menu";
import { Outlet } from "react-router-dom";
import "./main_page.css";

const MainPage = () => {
  return (
    <div className="body-app">
      <MenuApp />
      <Outlet />
    </div>
  );
};

export default MainPage;
