import React from "react";

function Icons(props) {
  let iconStyle = [];

  for (let i = 0; i < 7; i++) {
    const randTop = Math.floor(Math.random() * 100);
    const randLeft = Math.floor(Math.random() * 50);
    const randHeight = Math.floor(Math.random() * 20) * props.layer + 50;
    iconStyle[i] = {
      position: "relative",
      height: randHeight + "%",
      top: randTop + "vh",
      left: randLeft + "%",
      zIndex: -3,
    };
  }

  return (
    <div
      style={{
        position: "relative",
        zIndex: -1,
        width: "100vw",
        height: "100%",
      }}
    >
      <img
        src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
        alt="HTML5 Powered"
        title="HTML5 Powered"
        style={iconStyle[0]}
      />
      <img
        alt="CSS3 logo and wordmark"
        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
        style={iconStyle[1]}
      />
      <img
        alt="React logo and wordmark"
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        style={iconStyle[2]}
      />
      <img
        alt="Nodejs logo and wordmark"
        src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"
        style={iconStyle[3]}
      />
      <img
        alt="MongoDB logo and wordmark"
        src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
        style={iconStyle[4]}
      />
      <img
        alt="Javascript logo and wordmark"
        src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"
        style={iconStyle[5]}
      />
      <img
        alt="Jquery logo and wordmark"
        src="https://www.vectorlogo.zone/logos/jquery/jquery-horizontal.svg"
        style={iconStyle[6]}
      />
      <img
        alt="Git logo and wordmark"
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
        style={iconStyle[7]}
      />
    </div>
  );
}

export default Icons;
