import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../screens/Home";
import Dash from "../screens/Dash";
import Login from "../screens/Login";
import SignupUser from "../screens/SignupUser";
import SignupRest from "../screens/SignupRest";
import AddItem from "../screens/AddItem";

const customHistory = createBrowserHistory();

//Routes for Navigation
const MyRoutes = () => (
  <Router history={customHistory}>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={SignupUser} />
        <Route path="/restRegister" component={SignupRest} />
        <Route exact path="/dashboard" component={Dash} />
        <Route path="/dashboard/add_items" component={AddItem} />
    </div>
  </Router>
);

export default MyRoutes;
