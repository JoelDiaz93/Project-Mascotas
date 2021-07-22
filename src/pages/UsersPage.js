<<<<<<< HEAD
import React, { useState } from "react";
import UserInfo from "../components/UserInfo";
import { Button, Modal } from "antd";
import UpdateUserInfo from "../components/UpdateUserInfo";
import withAuth from "../hocs/withAuth";
=======
import React, {useState} from "react";
import UserInfo from "../components/UserInfo";
import { Button, Modal } from "antd";
import UpdateUserInfo from "../components/UpdateUserInfo";
>>>>>>> c295891b20c2e5ebfb1576090b5b33f1dc2218c3

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
<<<<<<< HEAD
      <UserInfo />
=======
      <UserInfo styles={{height: '100vh', display: 'grid'}} />
>>>>>>> c295891b20c2e5ebfb1576090b5b33f1dc2218c3
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

<<<<<<< HEAD
export default withAuth(UsersPage);
=======
export default UsersPage;
>>>>>>> c295891b20c2e5ebfb1576090b5b33f1dc2218c3
