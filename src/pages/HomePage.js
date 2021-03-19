import React from "react";
import { Col, Image, Row, Divider, Card } from "antd";
import Image1 from "../images/friends-3042751_1920.jpg";
import Image2 from "../images/dogue-de-bordeaux-1047521_640.jpg";
import Image3 from "../images/gato-marron_0.jpg";
import Image4 from "../images/lordguau-veterinaria.jpg";
import Image5 from "../images/geriatricarea-convivenciamascotas.jpg";
import Image6 from "../images/1140-woman-and-dog-esp.web.jpg";
import Image7 from "../images/5fa91c5aba725.jpeg";

const HomePage = () => {
  return (
    <>
      <Image width={"100%"} src={Image1} preview={false} />

      <Divider plain orientation="center">
        CATEGORIAS MAS VISTAS
      </Divider>

      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Image width={300} src={Image2} />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Image width={300} src={Image3} />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Image width={300} src={Image4} />
        </Col>
      </Row>

      <Divider plain orientation="center">
        TESTIMONIOS DE ADOPCION
      </Divider>

      <div className="site-card-wrapper" style={{ marginTop: 30 }}>
        <Row gutter={10} justify="center">
          <Col span={6}>
            <Card title="Nuestro amigo" bordered={false}>
              <Image width={300} src={Image5} />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Amigo Fiel" bordered={false}>
              <Image width={300} src={Image6} />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Son parte de la familia" bordered={false}>
              <Image width={300} src={Image7} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
