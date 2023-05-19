import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextWrapper } from "./store/app_context";
import App from "./App";
import "antd/dist/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextWrapper>
    <App />
  </AppContextWrapper>
);
