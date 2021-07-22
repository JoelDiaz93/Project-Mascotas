import React from "react";
import { Button, Result } from "antd";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Estás pérdido? vuelve a casa."
      extra={
        <Button type="primary">
          <Link to={Routes.HOME}>Ir a inicio</Link>
        </Button>
      }
    />
  );
};

<<<<<<< HEAD
export default NotFoundPage;
=======
export default NotFoundPage;
>>>>>>> c295891b20c2e5ebfb1576090b5b33f1dc2218c3
