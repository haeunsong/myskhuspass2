import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "../Screen/Admin/Container/Main";
import Visitor from "../Screen/Visitor/Container/Main";
import AdminSignin from "../Screen/Admin/Signin/Main";
import AdminDashboard from "../Screen/Admin/Dashboard/Main";
import AdminSignup from "../Screen/Admin/Signup/Main";
import AdminSearch from "../Screen/Admin/Search/Main";
import AddArea from "../Screen/Admin/Dashboard/AddArea";
import Checkin from "../Screen/Visitor/Checkin/Main";
import VisitorSignin from "../Screen/Visitor/Signin/Main";

const Main = () => {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/visitor" component={Visitor} />
      <Route exact path="/" component={Admin} />

      <Route path="/admin/signin" component={AdminSignin} />
      <Route path="/admin/signup" component={AdminSignup} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/search" component={AdminSearch} />
      <Route path="/admin/addarea" component={AddArea} />
      
      <Route path="/visitor/checkin" component={Checkin} />
      <Route path="/visitor/signin" component={VisitorSignin} />



    </Switch>
    </BrowserRouter>
  );
};

export default Main;
