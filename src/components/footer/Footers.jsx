import React, { Component } from "react";
import swal from "sweetalert";
import FooterDetails from "./FooterDetails";
import * as productService from "../../services/productService";
import EditForm from "../forms/EditForm";
import CreateForm from "../forms/CreateForm";

class Footers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerData: [],
      mappedFooterList: [],
      itemData: {
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
      },
      pageIndex: 0,
      pageSize: 5,
      itemType: 3,
      totalPages: 0,
      totalCount: 0,
      hasPreviousPage: true,
      hasNextPage: true,
      isEditing: false,
      id: 0,
      showEditForm: false,
      showCreateForm: false,
      searchQuery: "",
      isSearching: false,
      isLoading: false
    };
  }

  componentDidMount() {
    // axios call with a parameter of 3
    this.getPaginatedFooters();
  }

  getPaginatedFooters = () => {
    productService
      .getByType(this.state.pageIndex, this.state.pageSize, this.state.itemType)
      .then(this.onGetTypeSuccess)
      .catch(this.handleError);
  };

  onGetTypeSuccess = result => {
    const pageDetails = result.item;
    const footers = result.item.pagedItems;
    this.setState(() => {
      return {
        footerData: footers,
        mappedFooterList: footers.map(this.mapFooterContent),
        pageIndex: pageDetails.pageIndex,
        pageSize: pageDetails.pageSize,
        hasNextPage: pageDetails.hasNextPage,
        hasPreviousPage: pageDetails.hasPreviousPage,
        totalPages: pageDetails.totalPages,
        totalCount: pageDetails.totalCount,
        isSearching: false
      };
    }, this.scrollToTop);
    console.log("FooterData", this.state);
  };

  handleError = error => {
    let errResponse = error.toString();
    console.log(errResponse);
  };

  editBtnClick = event => {
    const id = Number(event.target.id);
    productService
      .getById(id)
      .then(this.returnItemData)
      .catch(this.handleError);
  };

  returnItemData = result => {
    console.log(result);
    let itemData = result.item;
    this.setState(() => {
      return {
        itemData: itemData,
        isEditing: true,
        showEditForm: true
      };
    });
  };

  toggleForm = () => {
    this.setState(prevState => {
      return {
        showCreateForm: !prevState.showForm
      };
    });
  };

  handleSubmit = data => {
    console.log(data);
    this.props.isEditing
      ? this.createFormSubmit(data)
      : this.updateFormSubmit(data);
  };

  updateFormSubmit = data => {
    console.log("Update", data);
    this.setState(
      () => {
        return {
          data
        };
      },
      () => {
        productService
          .update(data)
          .then(this.onUpdateSuccess)
          .catch(this.handleError);
      }
    );
  };

  onUpdateSuccess = model => {
    console.log("Update Success", model);
    this.setState(prevState => {
      let itemData = { ...prevState.itemData };
      let updatedFooters = [...prevState.footerData];
      let index = updatedFooters.findIndex(item => item.id === model.id);
      updatedFooters[index] = itemData;
      return {
        isEditing: false,
        showEditForm: false,
        mappedFooterList: updatedFooters.map(this.mapFooterContent),
        footerData: updatedFooters
      };
    });
    swal({
      title: "Item successfully updated!",
      icon: "success",
      timer: 2000
    });
    this.props.history.push("/footer");
  };

  createFormSubmit = data => {
    productService
      .create(data)
      .then(this.onCreateSuccess)
      .catch(this.handleError);
    console.log("Create", data);
    let newFooter = [...this.state.footerData];
    newFooter.unshift(data);
    this.setState(() => {
      return { footerData: newFooter };
    });
  };

  onCreateSuccess = data => {
    const id = data.item;
    let newData = [...this.state.footerData];
    newData[0].id = id;
    this.setState(() => {
      return {
        footerData: newData,
        mappedFooterList: newData.map(this.mapFooterContent)
      };
    });
    swal({
      title: "Item successfully created!",
      icon: "success",
      timer: 2000
    });
    this.props.history.push("/footer");
  };

  deleteBtnClick = event => {
    const id = Number(event.target.id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, this item cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.deleteSelection(id);
      } else {
        swal("Item was !deleted.");
      }
    });
  };

  deleteSelection = id => {
    console.log(id);
    productService
      .deleteById(id)
      .then(this.deleteSuccess)
      .catch(this.handleError);
  };

  deleteSuccess = id => {
    let deletedItem = [...this.state.footerData];
    let index = this.state.footerData.findIndex(event => event.id === id);
    console.log(deletedItem, index, id);
    deletedItem.splice(index, 1);
    this.setState({
      footerData: deletedItem,
      mappedFooterList: deletedItem.map(this.mapFooterContent)
    });
    swal("This item has been deleted!", {
      icon: "success",
      timer: 3000
    });
    this.props.history.push("/footer");
  };

  mapFooterContent = footer => (
    <FooterDetails
      history={this.props.history}
      key={footer.id}
      footer={footer}
      onEdit={this.editBtnClick}
      onDelete={this.deleteBtnClick}
    />
  );

  render() {
    return (
      <>
        <div
          className="container"
          hidden={this.state.showEditForm || this.state.showCreateForm}
        >
          <h4 className="center category-text">&lt;footer/&gt;</h4>
          <p className="category-headline footer-text">
            ourSocks = normalSocks++;
          </p>
        </div>
        <div>
          {this.state.showEditForm ? (
            <EditForm
              itemData={this.state.itemData}
              isEditing={this.state.isEditing}
              handleSubmit={this.updateFormSubmit}
            />
          ) : this.state.showCreateForm ? (
            <CreateForm
              itemData={this.state.itemData}
              isEditing={this.state.isEditing}
              handleSubmit={this.createFormSubmit}
            />
          ) : (
            this.state.mappedFooterList
          )}
        </div>
        <div className="col-xl-12 mb-5 mt-5 text-center">
          <button
            className="btn-oval btn-sm btn-dark col-xl-3"
            onClick={this.toggleForm}
            hidden={this.state.showEditForm || this.state.showCreateForm}
          >
            Add New Item
          </button>
        </div>
      </>
    );
  }
}

export default Footers;
