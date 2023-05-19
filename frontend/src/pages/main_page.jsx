import React from "react";
import { Outlet } from "react-router-dom";
import "./main_page.css";

const MainPage = () => {
  return (
    <div className="body-app">
      <Outlet />
    </div>
  );
};

export default MainPage;
