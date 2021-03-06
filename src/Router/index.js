import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage, SmsSchedullerPage } from "../pages";
import { NavBar, SideBar } from "../components/molekul";
import "./index.css";

const AuthPage = () => {
  return (
    <Router>
      <div className="wrapperRouterAuth">
        <div style={{ flex: 15 }}>
          <SideBar />
        </div>
        <div style={{ flex: 85 }}>
          <NavBar />
          <Route exact path="/home" component={HomePage} />
          <Route path="/smsscheduller" component={SmsSchedullerPage} />
        </div>
      </div>
    </Router>
  );
};

const RouterPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default RouterPage;
