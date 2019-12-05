import React, { Component } from "react";
import NavBar from "../src/components/home/Navbar";
import { Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import Headers from "../src/components/header/Headers";
import Header from "../src/components/header/Header";
import Bodies from "../src/components/body/Bodies";
import Body from "../src/components/body/Body";
import Footer from "../src/components/footer/Footer";
import ReactFooters from "../src/components/footer/Footers";
import Email from "../src/components/forms/Email";
import LamePage from "../src/components/iamlame/LamePage";
import "../src/components/styles/styles.css";

class AppRoutes extends Component {
  render() {
    return (
      <div id="App">
        <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <em className="fa-2x mr-2 fas fa-shopping-cart" />
          <Route exact path="/" component={Home} />
          <Route exact={true} path="/header" component={Headers} />
          <Route exact={true} path="/header/:header_id" component={Header} />
          <Route exact={true} path="/body" component={Bodies} />
          <Route exact={true} path="/body/:body_id" component={Body} />
          <Route exact={true} path="/footer" component={ReactFooters} />
          <Route exact={true} path="/footer/:footer_id" component={Footer} />
          <Route exact={true} path="/email" component={Email} />
          <Route exact={true} path="/iAmLame" component={LamePage} />
        </div>
      </div>
    );
  }
}
export default AppRoutes;
