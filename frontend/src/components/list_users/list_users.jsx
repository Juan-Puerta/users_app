import React, { useContext } from "react";
import CardUser from "../card_user/card_user";
import AppContext from "../../store/app_context";
import { List } from "antd";
import "./list_users.css";

const ListUsers = () => {
  const state = useContext(AppContext);

  return (
    <List
      pagination={{
        simple: true,
        pageSize: 10,
        size: "small",
      }}
      grid={{
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2,
        xxl: 2,
      }}
      dataSource={state.searched_users}
      renderItem={(user) => (
        <List.Item key={user.id}>
          <div className="list">
            <CardUser user={user} />
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListUsers;
