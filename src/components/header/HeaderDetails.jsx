import React from "react";
import "../styles/styles.css";

const HeaderDetails = props => {
  const redirectToHeaderInfo = () => {
    props.history.push("/header/" + props.header.id);
  };
  return (
    <div className="item card text-white mb-3 col-xl-4">
      <div className="mt-3 mb-3">
        <img
          onClick={redirectToHeaderInfo}
          src={props.header.imageUrl}
          id={props.header.id}
          alt="pic"
          className="card-img-top"
        />
      </div>
      <div className="card-content header-text">
        <span className="header-text" onClick={redirectToHeaderInfo}>
          {props.header.productName}
        </span>
        <p>${props.header.price}</p>
      </div>
      <div className="admin-buttons p-2 col-xl-12 text-center">
        <button
          className=" float-left btn-oval btn-sm btn-dark col-xl-4"
          id={props.header.id}
          onClick={props.onEdit}
        >
          Edit Item
        </button>
        <button
          className="float-right btn-oval btn-sm btn-dark col-xl-4"
          id={props.header.id}
          onClick={props.onDelete}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default React.memo(HeaderDetails);
