import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../styles/SiderMenu.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  HeartOutlined,
  AliwangwangOutlined,
  TagOutlined,
  ShoppingOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

class MainSiderMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<AliwangwangOutlined />} title="Mascotas">
            <Menu.Item key="1">Perros</Menu.Item>
            <Menu.Item key="2">Gatos</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<HeartOutlined />} title="Servicios">
            <Menu.Item key="3">Veterianario</Menu.Item>
            <Menu.Item key="4">Adiestramiento</Menu.Item>
            <Menu.Item key="5">Cuidados</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<ShoppingOutlined />} title="Accesorios">
            <Menu.Item key="6">Casas</Menu.Item>
            <Menu.Item key="8">Jaulas</Menu.Item>
            <Menu.Item key="9">Juguetes</Menu.Item>
            <Menu.Item key="10">Bebederos y platos</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<TagOutlined />}>
            Alimentos
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MainSiderMenu;
