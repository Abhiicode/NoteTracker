import React from "react";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" width="70" height="50" />
      <h1>Apna Notes</h1>
    </div>
  );
};

export default Header;
