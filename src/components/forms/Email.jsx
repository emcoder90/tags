import React, { Component } from "react";
import PropTypes from "prop-types";
import EmailForm from "./EmailForm";
import * as productService from "../../services/productService";
import swal from "sweetalert";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailData: {
        customerEmail: "",
        customerFirstName: "",
        customerLastName: ""
      }
    };
  }

  sendEmail = data => {
    productService
      .sendEmail(data)
      .then(this.emailSendSuccess)
      .catch(this.handleError);
  };

  emailSendSuccess = () => {
    swal({
      title: "Thanks!",
      text: "Use code C73RULES to save 15% next time!",
      icon: "success"
    });
    this.props.history.push("/");
  };

  handleError = () => {
    swal({
      title: "Are you sure?",
      text:
        "Maybe your friends gave you a fake email...or maybe you did something wrong. Either way email was !sent.",
      icon: "warning"
    });
  };
  render() {
    return (
      <div>
        <EmailForm sendEmail={this.sendEmail} />
      </div>
    );
  }
}

Email.propTypes = {
  history: PropTypes.any
};

export default Email;
