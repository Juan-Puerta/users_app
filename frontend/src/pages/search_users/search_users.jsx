import React, { useContext } from "react";
import ListUsers from "../../components/list_users/list_users";
import { Row, Col } from "antd";
import Graphic from "../../components/graphic/graphic";
import AppContext from "../../store/app_context";
import "./search_users.css";

const SearchUsers = () => {
  const state = useContext(AppContext);

  return (
    <div className="page_search_users">
      <Row className="row_users">
        <Col className="search" xs={24} sm={24} md={24} lg={14}>
          <ListUsers array_users={state.searched_users} />
        </Col>
        <Col className="box" xs={24} sm={24} md={24} lg={10}>
          <Graphic />
        </Col>
      </Row>
    </div>
  );
};

export default SearchUsers;
