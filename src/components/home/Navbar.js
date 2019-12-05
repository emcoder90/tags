import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/styles.css";

const NavBar = props => {
  return (
    <Menu {...props}>
      <a id="home" className="menu-item" href="/">
        &lt;tags/&gt;
      </a>
      <a
        id="header"
        className="menu-item"
        href="/header"
        style={{ height: "25px" }}
      >
        &lt;header/&gt;
      </a>
      <a
        id="body"
        className="menu-item"
        href="/body"
        style={{ height: "25px" }}
      >
        &lt;body/&gt;
      </a>
      <a
        id="footer"
        className="menu-item"
        href="/footer"
        style={{ height: "25px" }}
      >
        &lt;footer/&gt;
      </a>
      <a className="email menu-item" href="/email" style={{ height: "25px" }}>
        tell(yourFriends);
      </a>
    </Menu>
  );
};
export default NavBar;
