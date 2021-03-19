import React, { useEffect, useState } from "react";
import { Button, Card, Col, Descriptions, Modal, Row } from "antd";

const ItemService = ({ services }) => {
  return (
    <Row style={{ margin: "0 10%" }}>
      {services.map((service) => {
        return (
          <Col span={8} style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Card
              style={{ width: 200 }}
              cover={<img alt="Not Found Image" src={service.photoURL} />}
              actions={[
                <Button
                  type="link"
                  // onClick={() => handleViewMore(movie.imdbID)}
                >
                  Ver más
                </Button>,
              ]}
            >
              <Card.Meta
                title={service.servicename}
                description={service.description}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ItemService;
