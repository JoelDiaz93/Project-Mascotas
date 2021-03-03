import React, { useState } from "react";
import { Menu, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import Login from "./Login";
import RegisterUser from "./RegisterUser";

const MainMenu = () => {
  const [modalLoginUser, setModalLoginUser] = useState(false);
  const [modalRegisterUser, setModalRegisterUser] = useState(false);

  const showModalLogin = () => {
    setModalLoginUser(true);
  };

  const handleLoginOk = () => {
    setModalLoginUser(false);
  };

  const handleLoginCancel = () => {
    setModalLoginUser(false);
  };

  const showModalRegister = () => {
    setModalRegisterUser(true);
  };

  const handleRegisterOk = () => {
    setModalRegisterUser(false);
  };

  const handleRegisterCancel = () => {
    setModalRegisterUser(false);
  };
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="1">
        <Link to={Routes.HOME}>INICIO</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={Routes.SEARCH}>BUSCAR</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={Routes.ABOUT}>NOSOTROS</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to={Routes.USERS}>PERFIL</Link>
      </Menu.Item>

      <Button type="primary" onClick={showModalLogin}>INICIAR SESION</Button>
      <Button type="primary" onClick={showModalRegister}>REGISTRARSE</Button>

      <Modal title="Iniciar sesion" visible={modalLoginUser} onOk={handleLoginOk} onCancel={handleLoginCancel}
        footer={[
            // <Button key="back" >
            //   Return
            // </Button>,
            // <Button key="submit" type="primary">
            //   Submit
            // </Button>
          ]}
      >
        <Login/>
      </Modal>

      <Modal title="Registrar usuario" visible={modalRegisterUser} onOk={handleRegisterOk} onCancel={handleRegisterCancel}
        footer={[
            // <Button key="back" >
            //   Return
            // </Button>,
            // <Button key="submit" type="primary">
            //   Submit
            // </Button>
          ]}
      >
        <RegisterUser/>
      </Modal>
    </Menu>
  );
};

export default MainMenu;
