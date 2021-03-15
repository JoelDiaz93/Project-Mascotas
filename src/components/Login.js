import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom";
import Routes from "../constants/routes";
import { useAuth } from "../lib/auth";
import withoutAuth from "../hocs/withoutAuth";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const history = useHistory();
  const { login, user } = useAuth();

  useEffect(() => {
    if (!!user) {
      history.replace(Routes.HOME);
    }
  }, [user]);


  const onFinish = (values) => {
    console.log('Success:', values);
    console.log('user:', values.username, values.password);
    login(values.username, values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (user === null) {
    return "Verificando sesión...";
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
