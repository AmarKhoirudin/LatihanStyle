import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage, SmsSchedullerPage } from "../pages";
import { NavBar, SideBar } from "../components/molekul";

const AuthPage = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 15 }}>
          <SideBar />
        </div>
        <div style={{ flex: 85 }}>
          <NavBar />
          <Route exact path="/" component={HomePage} />
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
        <Route path="/login" component={LoginPage} />
        <Route exact component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default RouterPage;
