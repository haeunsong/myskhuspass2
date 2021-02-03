import React from "react";

import VisitorSignin from "../Signin/Main";
import Checkin from "../Checkin/Main";
import { getUserToken } from "../../../../Auth/Token";

const Main = () => {

  return <>{getUserToken() ? <Checkin /> : <VisitorSignin />}</>;
};

export default Main;
