import React from "react";

function Header() {
  return (
    <div id="heading">
      {/* <div id="leftHeading">
        <img id="logoImg" src="./Images/VictorianSkiesLogo.png" alt="logo" />
        <div>Riley's Dev Portfolio</div>
      </div> */}
      <div id="rightHeading">
        <div className="navItem">Home</div>
        <div className="navItem">Skills</div>
        <div className="navItem">Projects</div>
        <div className="navItem">Connect</div>
      </div>
    </div>
  );
}

export default Header;
