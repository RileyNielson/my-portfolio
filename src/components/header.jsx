import React from "react";

function Header() {
  return (
    <div id="heading">
      <div id="leftHeading">
        <img id="logoImg" src="./images/VictorianSkiesLogo.png" alt="logo" />
        <div>VictorianSkies</div>
      </div>
      <div id="rightHeading">
        <div className="navItem">Projects</div>
        <div className="navItem">Skills</div>
        <div className="navItem">About</div>
        <div className="navItem">Contact</div>
      </div>
    </div>
  );
}

export default Header;
