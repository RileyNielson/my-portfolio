import Info from "./Info.jsx";
import info from "./info.js";
import BackgroundImages from "./BackgroundImages.jsx";

const numberOfItems = info.length;

function App() {
  const itemGridStyle = {
    gridTemplateRows: "repeat(" + numberOfItems + ", 100vh)",
  };

  return (
    <div className="App">
      <div id="nameContainer">
        <h2 style={{marginRight: "2%"}}>Riley A. Nielson</h2>
      </div>
      <div id="scrollContainer">
        <div id="container" style={itemGridStyle}>
          {info.map((item, index) => (
            <Info
              key={index + 1}
              id={index + 1}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <BackgroundImages itemsCount={numberOfItems} />
      </div>
    </div>
  );
}

var scrolling = false;
var counter = 0;

document.addEventListener("wheel", (event) => {
  if (scrolling === false) {
    scrolling = true;
    const container = document.getElementById("container");
    const backgroundContainer1 = document.getElementById(
      "backgroundContainer1"
    );
    const backgroundContainer2 = document.getElementById(
      "backgroundContainer2"
    );
    const backgroundContainer3 = document.getElementById(
      "backgroundContainer3"
    );
    const backgroundContainer4 = document.getElementById(
      "backgroundContainer4"
    );
    const delta = Math.sign(event.deltaY);
    counter += delta;
    console.log(counter);
    if (counter < 0) {
      counter = 0;
      scrolling = false;
    } else if (counter > numberOfItems - 1) {
      counter = numberOfItems - 1;
      scrolling = false;
    } else {
      const animated = container.animate(
        { transform: "translate(0%," + counter * -100 + "vh)" },
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer1.animate(
        {
          transform: "translate(0%, " + (counter * -100) / 2 + "vh)",
        },
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer2.animate(
        { transform: "translate(0%, " + (counter * -100) / 5 + "vh)" },
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer3.animate(
        { transform: "translate(0%, " + (counter * -100) / 10 + "vh)" },
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer4.animate(
        { transform: "translate(0%, " + (counter * -100) / 20 + "%)" },
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      animated.onfinish = () => {
        scrolling = false;
      };
    }
  }
});

export default App;
