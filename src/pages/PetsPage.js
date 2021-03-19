import React from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Button,
  Upload,
  Switch,
  Typography,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { auth, db, storage } from "../fb";
import { useAuth } from "../lib/auth";
import withAuth from "../hocs/withAuth";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const PetsPage = () => {
  const { user } = useAuth();
  const { Title } = Typography;

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const { uid } = user;

      let photo = null;
      if (values.photo) {
        photo = values.photo[0].originFileObj;
      }

      let dewormed = null;
      if (typeof values.dewormed === undefined) {
        dewormed = "No";
      } else {
        dewormed = "Si";
      }
      let vaccinated = null;
      if (typeof values.vaccinated === undefined) {
        vaccinated = "No";
      } else {
        vaccinated = "Si";
      }
      let castrated = null;
      if (typeof values.castrated === undefined) {
        castrated = "No";
      } else {
        castrated = "Si";
      }

      const { petname, breed, color, sex } = values;
      var postListPet = db.ref("pets");
      var newPostPet = postListPet.push();
      let postId = newPostPet.getKey();
      const snapshot = await storage.ref(`pets/${postId}`).put(photo);
      const photoURL = await snapshot.ref.getDownloadURL();
      newPostPet.set({
        uid,
        petname,
        breed,
        color,
        sex,
        dewormed,
        vaccinated,
        castrated,
        photoURL,
      });

      var updates = {};
      updates["/users/" + uid + "/pets"] = {
        uid,
        petname,
        breed,
        color,
        sex,
        dewormed,
        vaccinated,
        castrated,
        photoURL,
      };
      db.ref().update(updates);

      message.success("Mascota publicada");
    } catch (error) {
      console.log("error", error);
      const errorCode = error.code;
      // message.error(translateMessage(errorCode));
      throw error;
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <>
      <Row justify="center" style={{ marginTop: "30px" }}>
        <Col>
          <Title level={2}>Ingresa los datos de la mascota</Title>
        </Col>
      </Row>

      <Form
        name="validate_other"
        {...layout}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="petname"
          label="Nombre"
          tooltip="Nombre de la mascota"
          rules={[
            {
              required: true,
              message: "Ingresa el nombre de la mascota!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="color"
          label="Color"
          tooltip="Color de la mascota"
          rules={[
            {
              required: true,
              message: "Ingresa el color de la mascota!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="breed"
          label="Raza"
          tooltip="Raza de la mascota"
          rules={[
            {
              required: true,
              message: "Ingresa el raza de la mascota!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="sex"
          label="Sexo"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Selecciona el sexo de la mascota!",
            },
          ]}
        >
          <Select placeholder="Selecciona un sexo para la mascota">
            <Option value="macho">Macho</Option>
            <Option value="hembra">Hembra</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={["user", "age"]}
          label="Edad"
          tooltip="Edad en meses de la mascota"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="dewormed"
          label="Desparasitado"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item name="vaccinated" label="Vacunado" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item
          name="castrated"
          label="Castrado-Esterilizado"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="photo"
          label="Foto"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Selecciona un archivo .jpg"
        >
          <Upload name="logo" action={null} listType="picture">
            <Button icon={<UploadOutlined />}>Subir foto</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Publicar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default withAuth(PetsPage);
