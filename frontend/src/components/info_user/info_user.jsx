import React, { useContext } from "react";
import AppContext from "../../store/app_context";

import { SaveOutlined } from "@ant-design/icons";
import { Card } from "antd";

const InfoUser = () => {
  const { Meta } = Card;
  const state = useContext(AppContext);

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={state.user?.avatar_url} />}
      actions={[<SaveOutlined key="save" />]}
    >
      <Meta title={state.user?.login} description={state.user?.html_url} />
    </Card>
  );
};

export default InfoUser;
