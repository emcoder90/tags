import React from "react";
import PropTypes from "prop-types";
import "../styles/styles.css";

const LameShirt = props => {
  console.log(props);
  return (
    <div className="p-3">
      <div className="card item col-xl-7 p-5" key={props.id}>
        <div className="item-card-text">
          <label className="lame-text">Lame Image:</label>
          <a href="props.item.url">
            <img src={props.item.image} alt="LameItem" className="card-img" />
          </a>
          <label>Lame Description:</label>
          <p>{props.item.description}</p>
          <label>Lame Price:</label>
          <p>{props.item.price}</p>
        </div>
      </div>
    </div>
  );
};

LameShirt.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default LameShirt;
