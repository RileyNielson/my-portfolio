import React from "react";
import Clouds from "./clouds";

function BackgroundImages(props) {
  const layerCount = 4;

  let backgroundGridStyle = [];

  for (let i = 0; i < layerCount; i++) {
    backgroundGridStyle[i] = {
      height:
        ((layerCount - 1 * (layerCount - 1 - i) + layerCount) / layerCount) *
          100 +
        "vh",
      width: "100vw",
    };
  }

  const divWidth = { height: "100vh", width: "100vw" };

  return (
    <div style={divWidth}>
      <div id="backgroundContainer1" style={backgroundGridStyle[0]}>
        <Clouds layer={0} />
      </div>
      <div
        id="backgroundContainer2"
        className="background"
        style={backgroundGridStyle[1]}
      >
        <Clouds layer={1} />
      </div>
      <div
        id="backgroundContainer3"
        className="background"
        style={backgroundGridStyle[2]}
      >
        <Clouds layer={2} />
      </div>
      <div
        id="backgroundContainer4"
        className="background"
        style={backgroundGridStyle[3]}
      >
        <Clouds layer={3} />
      </div>
    </div>
  );
}

export default BackgroundImages;
