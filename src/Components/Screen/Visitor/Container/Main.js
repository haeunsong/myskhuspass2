import React from "react";

import VisitorSignin from "../Signin/Main";
import Checkin from "../Checkin/Main";
import { getUserToken } from "../../../../Auth/Token";
import { Redirect } from "react-router-dom";

const Main = () => {

  return (
    <>
      {getUserToken() ? (
        <Redirect to="/visitor/checkin" />
      ) : (
        <Redirect to="/visitor/signin" />
      )
      }

    </>

  );
};

export default Main;
