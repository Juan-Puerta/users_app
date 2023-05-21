import React, { useContext } from "react";
import AppContext from "../../store/app_context";
import { local_api } from "../../config/axios_local_api";
import { SaveOutlined } from "@ant-design/icons";
import { Card, message } from "antd";

const InfoUser = () => {
  const { Meta } = Card;
  const state = useContext(AppContext);
  const [messageApi, contextHolder] = message.useMessage();

  const alert_message = (type, msg) => {
    messageApi.open({
      type: type,
      content: msg,
    });
  };

  const saved_user = () => {
    local_api
      .post(`git_users/`, {
        data: {
          id: state.user.id,
          login: state.user.login,
          html_url: state.user.html_url,
          avatar_url: state.user.avatar_url,
        },
      })
      .then(() => {
        alert_message("success", "User successfully added");
      })
      .catch(() => alert_message("error", "User could not be added"));
    state.get_saved_users();
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={state.user?.avatar_url} />}
      actions={[<SaveOutlined onClick={() => saved_user()} key="save" />]}
    >
      {contextHolder}
      <Meta title={state.user?.login} description={state.user?.html_url} />
    </Card>
  );
};

export default InfoUser;
