import React from "react";

function Clouds(props) {
  let cloudStyle = [];

  for (let i = 0; i < 7; i++) {
    const randTop = Math.floor(Math.random() * 100);
    const randLeft = Math.floor(Math.random() * 100 - 25);
    const randHeight = Math.floor(Math.random() * 100) * props.layer + 100;
    cloudStyle[i] = {
      position: "relative",
      height: randHeight + "px",
      top: randTop + "%",
      left: randLeft + "%",
      zIndex: -i - 10,
    };
  }

  return (
    <div style={{ position:"absolute", zIndex: -20, height:"inherit"}}>
      <img src="./Images/Cloud0.png" alt="cloud" style={cloudStyle[0]} />
      <img src="./Images/Cloud1.png" alt="cloud" style={cloudStyle[1]} />
      <img src="./Images/Cloud2.png" alt="cloud" style={cloudStyle[2]} />
      <img src="./Images/Cloud3.png" alt="cloud" style={cloudStyle[3]} />
      <img src="./Images/Cloud4.png" alt="cloud" style={cloudStyle[4]} />
      <img src="./Images/Cloud5.png" alt="cloud" style={cloudStyle[5]} />
      <img src="./Images/Cloud6.png" alt="cloud" style={cloudStyle[6]} />
    </div>
  );
}

export default Clouds;
