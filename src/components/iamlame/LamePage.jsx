import React, { Component } from "react";
import * as productService from "../../services/productService";
import LameShirt from "./LameShirt";

export default class LamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lameShirtArray: [],
      mappedLameShirts: []
    };
  }

  componentDidMount() {
    this.getLameShirts();
  }

  getLameShirts = () => {
    productService
      .ahScrapeIt()
      .then(this.onGetLameSuccess)
      .catch(this.handleError);
  };

  onGetLameSuccess = result => {
    console.log(result);
    const lameness = result.items;
    this.setState(() => {
      return {
        lameShirtArray: lameness,
        mappedLameShirts: lameness.map(this.mapScrapedData)
      };
    });
    console.log(this.state.mappedLameShirts);
  };

  mapScrapedData = item => <LameShirt key={item.id} item={item} />;

  render() {
    return (
      <div>
        <p className="item-card-text">
          Since you are <span className="header-text">lame</span> &&{" "}
          <span className="header-text">!</span>stoked on our amazing items.
        </p>
        <p className="item-card-text">
          Go ahead and enjoy this page of beautifully scraped shirts that are...
        </p>
        <h5 className="header-text">just</h5>
        <p className="item-card-text">as</p>
        <h3 className="header-text">lame</h3>
        <p className="item-card-text">as</p>
        <h1 className="ml-4 lame">you.</h1>
        {this.state.mappedLameShirts}
      </div>
    );
  }
}
