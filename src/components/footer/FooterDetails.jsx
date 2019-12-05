import React from "react";
import PropTypes from "prop-types";
import "../styles/styles.css";

// import logger from "../logger";

// const _logger = logger.extend("FooterDeets");

// export const FooterDetails = props => {
const FooterDetails = props => {
  const redirectToFooterInfo = () => {
    console.log(props);
    props.history.push("/footer/" + props.footer.id);
  };
  return (
    <div className="item card text-white mb-3 col-xl-4">
      <div className="mt-3 mb-3">
        <img
          onClick={redirectToFooterInfo}
          src={props.footer.imageUrl}
          id={props.footer.id}
          alt="pic"
          className="card-img-top"
        />
      </div>
      <div className="card-content footer-text">
        <span className="footer-text" onClick={redirectToFooterInfo}>
          {props.footer.productName}
        </span>
        <p>${props.footer.price}</p>
      </div>
      <div className="admin-buttons p-2 col-xl-12 text-center">
        <button
          className=" float-left btn-oval btn-sm btn-dark col-xl-4"
          id={props.footer.id}
          onClick={props.onEdit}
        >
          Edit Item
        </button>
        <button
          className="float-right btn-oval btn-sm btn-dark col-xl-4"
          id={props.footer.id}
          onClick={props.onDelete}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

FooterDetails.propTypes = {
  footer: PropTypes.shape({
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

export default React.memo(FooterDetails);
