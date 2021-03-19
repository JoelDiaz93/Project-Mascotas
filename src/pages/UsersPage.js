import React, { useState } from "react";
import UserInfo from "../components/UserInfo";
import { Button, Modal } from "antd";
import UpdateUserInfo from "../components/UpdateUserInfo";
import withAuth from "../hocs/withAuth";

const UsersPage = () => {
  const [update, setUpdate] = useState(false);

  const showModalUpdate = () => {
    setUpdate(true);
  };

  const handleUpdateOk = () => {
    setUpdate(false);
  };

  const handleUpdateCancel = () => {
    setUpdate(false);
  };

  return (
    <>
      <UserInfo />
      {/* <Button type="primary" onClick={showModalUpdate}>Actualizar informacion</Button>
      <Modal title="Actualizar Informacion" visible={update} onOk={handleUpdateOk} onCancel={handleUpdateCancel}
        footer={[
            // <Button key="back" >
            //   Return
            // </Button>,
            // <Button key="submit" type="primary">
            //   Submit
            // </Button>
          ]}
      >
        <UpdateUserInfo/>
      </Modal> */}
    </>
  );
};

export default withAuth(UsersPage);
