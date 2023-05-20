import React from "react";
import ListUsers from "../../components/list_users/list_users";
import { Row, Col } from "antd";
import Graphic from "../../components/graphic/graphic";
import "./search_users.css";

const SearchUsers = () => {
  return (
    <div className="page_search_users">
      <Row className="row_users">
        <Col className="search" md={24} lg={14}>
          <ListUsers />
        </Col>
        <Col className="box" md={24} lg={10}>
          <Graphic />
        </Col>
      </Row>
    </div>
  );
};

export default SearchUsers;
