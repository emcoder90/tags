import React from "react";
import { Card, Row } from "reactstrap";
import * as productService from "../../services/productService";
import PropTypes from "prop-types";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      productTypeId: 0,
      productReferenceNumber: 0,
      productName: "",
      price: 0,
      color: "",
      fabricType: "",
      fit: "",
      details: "",
      detailsId: 0,
      description: "",
      descriptionId: 0,
      imageId: 0,
      imageUrl: ""
    };
  }
  componentDidMount() {
    let id = Number(this.props.match.params.body_id);
    this.getBody(id);
  }

  getBody = id => {
    productService
      .getById(id)
      .then(this.getProductSuccess)
      .catch(this.handleError);
  };

  getProductSuccess = response => {
    const body = response.item;
    this.setState({
      id: body.id,
      productTypeId: body.productTypeId,
      productReferenceNumber: body.productReferenceNumber,
      productName: body.productName,
      price: body.price,
      color: body.color,
      fabricType: body.fabricType,
      fit: body.fit,
      details: body.details,
      detailsId: body.detailsId,
      description: body.description,
      descriptionId: body.descriptionId,
      imageId: body.imageId,
      imageUrl: body.imageUrl
    });
  };

  handleError = error => {
    let errResponse = error.toString();
    console.log(errResponse);
  };

  render() {
    return (
      <>
        <div className="flex-grid">
          <Card
            className="item mb-4 p-4"
            style={{
              width: "75%"
            }}
          >
            <Row>
              <div className="p-2 text-center col-xl-6">
                <img
                  src={this.state.imageUrl}
                  alt="itemImage"
                  className="card-img"
                />
              </div>
              <div className="col-xl-6">
                <h4 className="p-2 body-text">{this.state.productName}</h4>
                <h4 className="item-card-text text-bold">
                  ${this.state.price}
                </h4>
                <div className="col-xl-12 item-card-text text-center">
                  <p>{this.state.description}</p>
                  <ul />
                </div>
                <div className="col-xl-12">
                  <p className="body-text text-left">Details & Fit</p>
                  <ul className="item-card-text text-left">
                    <li className="">{this.state.color}</li>
                    <li>{this.state.fabricType} </li>
                    <li>{this.state.fit}</li>
                    <li>{this.state.details}</li>
                  </ul>
                </div>
              </div>
            </Row>
            <Row>
              {" "}
              <div className="user-buttons col-xl-12 text-center">
                <button
                  className="mr-2 text-black btn-oval btn-dark btn-lg mx-3 col-xl-5 float-right"
                  id="body"
                >
                  Add to Cart
                </button>
              </div>
            </Row>
          </Card>
        </div>
      </>
    );
  }
}

Body.propTypes = {
  match: PropTypes.object
};

export default Body;
