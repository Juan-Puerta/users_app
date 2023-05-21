import React, { useState, useContext } from "react";
import { Input, Button, message, Breadcrumb } from "antd";
import { BarChartOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AppContext from "../../store/app_context";
import { github_api } from "../../config/axios_github_api";
import "./menu.css";

const MenuApp = () => {
  const state = useContext(AppContext);
  const [user_name, set_user_name] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const menuItems = [
    {
      key: "1",
      label: (
        <Link onClick={() => state.set_page(state.pages.search)} to="/">
          Search Users
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link onClick={() => state.set_page(state.pages.view)} to="/user">
          View User
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          onClick={() => state.set_page(state.pages.saved)}
          to="/saved_users"
        >
          Saved Users
        </Link>
      ),
    },
  ];

  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  const validator = () => {
    if (user_name.length > 3 && user_name !== "doublevpartners") {
      on_change();
    } else {
      error(
        "String length must be greater than 3 and different from 'doublevpartners'"
      );
    }
  };

  const on_change = async () => {
    if (state.page === state.pages.search) {
      const resp = await github_api.get(`search/users?q=${user_name}`);
      state.set_searched_users(resp.data.items);
    } else if (state.page === state.pages.view) {
      try {
        const resp = await github_api.get(`users/${user_name}`);
        state.set_user(resp.data);
      } catch (e) {
        error(`Name user "${user_name}" not found`);
      }
    }
  };

  const change_followes = async () => {
    const followers = [];
    const names = [];

    const stop =
      state.searched_users.length > 10 ? 10 : state.searched_users.length;

    for (var i = 0; i < stop; i++) {
      var follow = await github_api.get(
        `users/${state.searched_users[i].login}`
      );
      followers.push(follow.data.followers);
      names.push(state.searched_users[i].login);
    }

    state.set_followers([followers, names]);
  };

  return (
    <div className="menu_app">
      {contextHolder}
      <div>
        <Breadcrumb
          items={[
            {
              title: "Options",
              menu: {
                items: menuItems,
              },
            },
          ]}
        />
      </div>
      <div className="search_div">
        <Input
          disabled={state.page === state.pages.saved ? true : false}
          className="input_user"
          placeholder="User Name"
          value={user_name}
          onChange={(event) => set_user_name(event.target.value)}
        />
        <Button
          disabled={state.page === state.pages.saved ? true : false}
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          shape="circle"
          onClick={validator}
        />
        <Button
          disabled={
            state.page === state.pages.view || state.page === state.pages.saved
              ? true
              : false
          }
          type="primary"
          icon={<BarChartOutlined />}
          size="large"
          shape="circle"
          onClick={change_followes}
        />
      </div>
    </div>
  );
};

export default MenuApp;
