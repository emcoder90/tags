import React, { Component } from "react";
import HeaderDetails from "./HeaderDetails";
import * as productService from "../../services/productService";
import "../styles/styles.css";

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: [],
      mappedHeaderList: [],
      pageIndex: 0,
      pageSize: 5,
      itemType: 1,
      totalPages: 0,
      totalCount: 0,
      hasPreviousPage: true,
      hasNextPage: true,
      isEditing: false,
      id: 0,
      showItem: false,
      searchQuery: "",
      isSearching: false,
      isLoading: false
    };
  }

  componentDidMount() {
    // axios call with a parameter of 1
    this.getPaginatedHeaders();
  }

  getPaginatedHeaders = () => {
    productService
      .getByType(this.state.pageIndex, this.state.pageSize, this.state.itemType)
      .then(this.onGetTypeSuccess)
      .catch(this.handleError);
  };

  onGetTypeSuccess = result => {
    const pageDetails = result.item;
    const headers = result.item.pagedItems;
    this.setState(() => {
      return {
        headerData: headers,
        mappedHeaderList: headers.map(this.mapHeaderContent),
        pageIndex: pageDetails.pageIndex,
        pageSize: pageDetails.pageSize,
        hasNextPage: pageDetails.hasNextPage,
        hasPreviousPage: pageDetails.hasPreviousPage,
        totalPages: pageDetails.totalPages,
        totalCount: pageDetails.totalCount,
        isSearching: false
      };
    }, this.scrollToTop);
    console.log("HeaderData", this.state);
  };

  handleError = error => {
    let errResponse = error.toString();
    console.log(errResponse);
  };

  mapHeaderContent = header => (
    <HeaderDetails
      history={this.props.history}
      key={header.id}
      header={header}
      onEdit={this.editBtnClick}
      onDelete={this.deleteBtnClick}
    />
  );

  render() {
    return (
      <>
        <div className="container">
          <h4 className="center category-text">&lt;header/&gt;</h4>
          <p className="category-headline header-text">
            Hats that will not only contain your mind, they'll blow it.
          </p>
        </div>
        <div>
          {this.state.showItem ? (
            <HeaderDetails />
          ) : (
            this.state.mappedHeaderList
          )}
        </div>
        <div className="col-xl-12 mb-5 mt-5 text-center">
          <button className="btn-oval btn-sm btn-dark col-xl-3">
            Add New Item
          </button>
        </div>
      </>
    );
  }
}

export default Headers;
