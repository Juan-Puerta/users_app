import React, { useContext, useState } from "react";
import AppContext from "../../store/app_context";
import { github_api } from "../../config/axios";
import ListUsers from "../../components/list_users/list_users";
import { Input, Divider, Image, Row, Col, message, Button } from "antd";
import math_img from "../../images/math_image.svg";
import "./search_users.css";

const SearchUsers = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [user_name, set_user_name] = useState("");
  const state = useContext(AppContext);

  const error = () => {
    messageApi.open({
      type: "error",
      content:
        "The name must be longer than 3 characters and must be different from 'doublevpartners'",
    });
  };

  const on_change = async () => {
    const resp = await github_api.get(`users?q=${user_name}`);
    state.set_searched_users(resp.data.items);
    console.log(state.searched_users);
    console.log(resp.data.items);
  };

  return (
    <Row className="page_search_users">
      {contextHolder}
      <Col className="search" md={24} lg={14}>
        <div className="search_div">
          <Input
            value={user_name}
            onChange={(event) => set_user_name(event.target.value)}
          />
          <Button
            type="primary"
            onClick={
              user_name.length > 3 && user_name !== "doublevpartners"
                ? on_change
                : error
            }
          >
            Search
          </Button>
        </div>
        <Divider />
        <ListUsers />
      </Col>
      <Col className="box" md={24} lg={10}>
        <Image src={math_img} />
      </Col>
    </Row>
  );
};

export default SearchUsers;
