import React from "react";
import { Avatar } from "antd";
import "./card_user.css";

const CardUser = ({ user_img, user_id, user_login }) => {
  return (
    <div className="card">
      <Avatar size={64} src={user_img} />
      <div className="card_info">
        <div>ID: {user_id}</div>
        <div>User: {user_login}</div>
      </div>
    </div>
  );
};

export default CardUser;
