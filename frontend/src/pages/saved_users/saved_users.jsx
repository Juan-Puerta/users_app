import React, { useContext } from "react";
import { Row, Col } from "antd";
import ListUsers from "../../components/list_users/list_users";
import AppContext from "../../store/app_context";
import "./saved_users.css";

const SavedUsers = () => {
  const state = useContext(AppContext);

  return (
    <div className="page_search_users">
      <Row className="row_users">
        <Col className="search" md={24}>
          <ListUsers array_users={state.saved_users} />
        </Col>
      </Row>
    </div>
  );
};

export default SavedUsers;
