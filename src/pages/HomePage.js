import React from "react";
import { Col, Image, Input, Row, Space, Divider } from "antd";
import Image1 from "../images/friends-3042751_1920.jpg";
import Image2 from "../images/dogue-de-bordeaux-1047521_640.jpg";

const HomePage = () => {
  return (
    <>
      <Image width={"100%"} src={Image1} />
      
      <Divider plain orientation="center">CATEGORIAS MAS VISTAS</Divider>
      
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Image width={300} src={Image2} />
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Image width={300} src={Image2} />
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Image width={300} src={Image2} />
          </Col>
        </Row>
      
    </>
  );
};

export default HomePage;
