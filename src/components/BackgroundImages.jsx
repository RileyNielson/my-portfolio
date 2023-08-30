import React from "react";
import Clouds from "./clouds";

function BackgroundImages(props) {
  const layerCount = 4;

  let backgroundContainer = [];
  let backgroundGridStyle = [];

  for (let i = 0; i < layerCount; i++) {
    backgroundContainer[i] = "backgroundContainer" + i
    backgroundGridStyle[i] = {
      height:
        ((layerCount - 1 * (layerCount - 1 - i)) / layerCount) * 100 + "vh",
      width: "100vw",
    };
  }

  const divWidth = {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: -20,
  };

  return (
    <div style={divWidth}>
      {backgroundContainer.map((item, index) => {
        return(<div id={item} style={backgroundGridStyle[index]}>
          <Clouds layer={index} />
        </div>)
      })}
    </div>
  );
}

export default BackgroundImages;
