import React from "react";
import CardUser from "../card_user/card_user";
import { List } from "antd";
import "./list_users.css";

const ListUsers = ({ array_users }) => {
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
      dataSource={array_users}
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
