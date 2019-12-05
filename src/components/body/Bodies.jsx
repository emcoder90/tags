import React, { Component } from "react";
import BodyDetails from "./BodyDetails";
import * as productService from "../../services/productService";

class Bodies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyData: [],
      mappedBodyList: [],
      pageIndex: 0,
      pageSize: 5,
      itemType: 2,
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
    // axios call with a parameter of 2
    this.getPaginatedBodies();
  }

  getPaginatedBodies = () => {
    productService
      .getByType(this.state.pageIndex, this.state.pageSize, this.state.itemType)
      .then(this.onGetTypeSuccess)
      .catch(this.handleError);
  };

  onGetTypeSuccess = result => {
    const pageDetails = result.item;
    const bodies = result.item.pagedItems;
    this.setState(() => {
      return {
        bodyData: bodies,
        mappedBodyList: bodies.map(this.mapBodyContent),
        pageIndex: pageDetails.pageIndex,
        pageSize: pageDetails.pageSize,
        hasNextPage: pageDetails.hasNextPage,
        hasPreviousPage: pageDetails.hasPreviousPage,
        totalPages: pageDetails.totalPages,
        totalCount: pageDetails.totalCount,
        isSearching: false
      };
    }, this.scrollToTop);
    console.log("BodyData", this.state);
  };

  handleError = error => {
    let errResponse = error.toString();
    console.log(errResponse);
  };

  mapBodyContent = body => (
    <BodyDetails
      history={this.props.history}
      key={body.id}
      body={body}
      onEdit={this.editBtnClick}
      onDelete={this.deleteBtnClick}
    />
  );
  render() {
    return (
      <>
        <div>
          <div className="container">
            <h4 className="center category-text">&lt;body/&gt;</h4>
            <p className="category-headline body-text">
              Now your physical body can look clean as your code body.
            </p>
          </div>

          <div>
            {this.state.showItem ? <BodyDetails /> : this.state.mappedBodyList}
          </div>
          <div className="col-xl-12 mb-5 mt-5 text-center">
            <button className="btn-oval btn-sm btn-dark col-xl-3">
              Add New Item
            </button>
          </div>
        </div>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     bodies: state.bodies
//   };
// };

// const mapDispatchToProps = { addToCart, setCart, setRoles, getBodies };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Bodies);

export default Bodies;
