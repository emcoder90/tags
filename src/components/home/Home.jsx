import React from "react";
import Typing from "react-typing-animation";
import "../styles/styles.css";

const Home = () => {
  return (
    <>
      <i className="col-xl-12 pull-right fa-2x mr-2 fas fa-shopping-cart" />
      <div className="container col-xl-12">
        <Typing speed={150}>
          <h1 className="title-text">&lt;tags/&gt;</h1>
        </Typing>
      </div>
    </>
  );
};

export default Home;
