import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { Button, Card, Col, Descriptions, Modal, Row } from "antd";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const ItemService = ({ services }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => {
    return actions.order.capture();
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
<<<<<<< HEAD
    <Row style={{ margin: "0 10%" }}>
      {services.map((service) => {
        return (
          <Col span={8} style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Card
              style={{ width: 200 }}
              cover={<img alt="Not Found Image" src={service.photoURL} />}
              actions={[
                <Button type="primary" onClick={showModal}>
                  Open Modal
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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
      </Modal>
    </Row>
=======
      <Row style={{ margin: "0 10%" }}>
        {services.map((service) => {
          return (
              <Col span={8} style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Card
                    style={{ width: 200 }}
                    cover={<img alt="Not Found Image" src={service.photoURL} />}
                    actions={[
                      <Button type="primary" onClick={showModal}>
                        Open Modal
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
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
          />
        </Modal>
      </Row>
>>>>>>> c295891b20c2e5ebfb1576090b5b33f1dc2218c3
  );
};

export default ItemService;
