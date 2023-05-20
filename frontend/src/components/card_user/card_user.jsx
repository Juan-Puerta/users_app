import React, { useContext } from "react";
import AppContext from "../../store/app_context";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import "./card_user.css";

const CardUser = ({ user }) => {
  const state = useContext(AppContext);

  const on_change = () => {
    state.set_user(user);
  };

  return (
    <Link to={`user/${user.id}`} className="card" onClick={on_change}>
      <Avatar size={64} src={user.avatar_url} />
      <div className="card_info">
        <div>ID: {user.id}</div>
        <div>User: {user.login}</div>
      </div>
    </Link>
  );
};

export default CardUser;
