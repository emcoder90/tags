import React, { Component } from "react";
import logger from "./logger";
import { Row, Col } from "reactstrap";
import { Route, withRouter, Link } from "react-router-dom";
import Headers from "../src/components/header/Headers";
import Bodies from "../src/components/body/Bodies";
import Footers from "../src/components/footer/Footers";
import Footer from "../src/components/footer/Footer";
import Email from "../src/components/forms/Email";
import LamePage from "../src/components/iamlame/LamePage";
import AppRoutes from "./AppRoutes";

const _logger = logger.extend("App");
class App extends Component {
  state = { isLocalSetUp: false, storeValue: "", nsKeys: [] };

  componentDidMount() {
    _logger("componentDidMount");
    let isLocalSetUp = false;
    let storeValue = localStorage.getItem("debug");
    let nsKeys = [];
    if (storeValue) {
      isLocalSetUp = true;
      nsKeys = storeValue.split(",");
    }

    this.setState({ isLocalSetUp, storeValue, nsKeys });
  }
  onSetDebug = () => {
    localStorage.setItem(
      "debug",
      "tags,tags:App,tags:Headers,tags:Bodies,tags:Footers,tags:redux:store,tags:redux:reducers*,tags:redux:actions"
    );

    window.location.reload();
  };
  render() {
    return (
      <>
        <AppRoutes />
      </>
    );
  }

  renderInstructions() {
    return (
      <React.Fragment>
        <Col>
          <Row>
            <Col>
              Console &quot;debug&quot; settings currently set to show{" "}
              {this.state.nsKeys.length} namespaces{" "}
              <ul>
                {" "}
                {this.state.nsKeys.map((namespace, id) => (
                  <li key={id}>{namespace}</li>
                ))}
              </ul>
              <p>
                <strong>Check out the output visible in the console.</strong>
              </p>
              <p>
                Be sure to the react folder root for more information and
                details on further set up.
              </p>
              <p>Do not forget to install Redux Developer Tools</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="list-inline">
                <li className="list-inline-item">
                  {" "}
                  <Link to="/products">Products</Link>
                  <Link to="/headers">Header</Link>
                  <Link to="/bodies">Body</Link>
                  <Link to="/footer">Footer</Link>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link to="/cart">Shopping Cart</Link>
                </li>
              </ul>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Route path="/header" component={Headers} />
              <Route path="/body" component={Bodies} />
              <Route path="/footer" component={Footers} />
              <Route
                exact={true}
                path="/footer/:footer_id"
                component={Footer}
              />
              <Route path="/email" component={Email} />
              <Route path="/iAmLame" component={LamePage} />
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  }

  renderPromptToEnableDebug() {
    return (
      <Row>
        <Col>
          <p>
            You currently do not have any &quot; debug&quot; settings in
            localStorage.
          </p>
          <p>w your developer tools &gt; Console you will see no messages.</p>
          <p>
            Click here to have some defaults set up for you:{" "}
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={this.onSetDebug}
            >
              Set Up
            </button>
          </p>
        </Col>
      </Row>
    );
  }
}

export default withRouter(App);
