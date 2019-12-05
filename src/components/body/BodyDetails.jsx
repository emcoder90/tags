import React from "react";
import PropTypes from "prop-types";
import "../styles/styles.css";

const BodyDetails = props => {
  const redirectToBodyInfo = () => {
    console.log(props);
    props.history.push("/body/" + props.body.id);
  };
  return (
    <div className="item card text-white mb-3 col-xl-4">
      <div className="mt-3 mb-3">
        <img
          onClick={redirectToBodyInfo}
          src={props.body.imageUrl}
          id={props.body.id}
          alt="pic"
          className="card-img-top"
        />
      </div>
      <div className="card-content body-text">
        <span className="body-text" onClick={redirectToBodyInfo}>
          {props.body.productName}
        </span>
        <p>${props.body.price}</p>
      </div>
      <div className="admin-buttons p-2 col-xl-12 text-center">
        <button
          className=" float-left btn-oval btn-sm btn-dark col-xl-4"
          id={props.body.id}
          onClick={props.onEdit}
        >
          Edit Item
        </button>
        <button
          className="float-right btn-oval btn-sm btn-dark col-xl-4"
          id={props.body.id}
          onClick={props.onDelete}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

BodyDetails.propTypes = {
  body: PropTypes.shape({
    id: PropTypes.number,
    productTypeId: PropTypes.number,
    productReferenceNumber: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.number,
    color: PropTypes.string,
    fabricType: PropTypes.string,
    fit: PropTypes.string,
    details: PropTypes.string,
    detailsId: PropTypes.number,
    description: PropTypes.string,
    descriptionId: PropTypes.number,
    imageId: PropTypes.number,
    imageUrl: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  history: PropTypes.any
};

export default React.memo(BodyDetails);
