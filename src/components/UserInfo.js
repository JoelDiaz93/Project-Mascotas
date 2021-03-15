import React, { useEffect, useState } from "react";
import { Descriptions, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import MapView from "../map/MapView";
import { useAuth } from "../lib/auth";
import { auth, db, storage } from "../fb";

const UserInfo = () => {

  const { infoUser, user } = useAuth();
  const { info, setInfo } = useState([]);

  useEffect(() => {
    infoUser(user.uid);
  }, [user])

  console.log('User in info: ', user.uid);

  return (
    <>
      <Row>
        <Col>
          <div style={{ margin: "30px" }}>
            <Avatar size={64} icon={<UserOutlined />} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Descriptions title="Informacion del usuario">
            <Descriptions.Item label="UserName">sadas</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">
              Hangzhou, Zhejiang
            </Descriptions.Item>
            <Descriptions.Item label="Email">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row>
        <Col>
          <MapView />
        </Col>
      </Row>
    </>
  );
};

export default UserInfo;
