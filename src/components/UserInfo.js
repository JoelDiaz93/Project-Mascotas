import React from "react";
import { Descriptions, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserInfo = () => {
  return (
    <>
      <div style={{margin:"30px"}}>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <Descriptions title="Informacion del usuario">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Email">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default UserInfo;
