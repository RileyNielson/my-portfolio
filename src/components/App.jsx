import Info from "./Info.jsx";
import info from "./info.js";
import BackgroundImages from "./BackgroundImages.jsx";
import Header from "./header.jsx";

const numberOfItems = info.length;

function App() {
  const itemGridStyle = {
    gridTemplateRows: "repeat(" + numberOfItems + ", 100vh)",
  };

  return (
    <div className="App">
      <Header />
      <div id="backgroundContainer"></div>
      <BackgroundImages itemsCount={numberOfItems} />
      <div id="nameContainer">
        <h2 style={{ marginRight: "1%" }}>Riley Nielson</h2>
      </div>
      <div id="scrollContainer">
        <div id="container" style={itemGridStyle}>
          {info.map((item, index) => (
            <Info
              key={index + 1}
              id={index + 1}
              title={item.title}
              content={item.content}
              imgSrc={item.imageSrc}
              imgAlt={item.imageAlt}
            />
          ))}
        </div>
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
    const backgroundContainer = document.getElementById("backgroundContainer");
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
    const scrollDuration = 600;
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
          duration: scrollDuration,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer.animate(
        {
          transform: "translate(0%, " + counter * -100 + "vh)",
        },
        {
          duration: scrollDuration,
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
          duration: scrollDuration,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer2.animate(
        { transform: "translate(0%, " + (counter * -100) / 4 + "vh)" },
        {
          duration: scrollDuration,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer3.animate(
        { transform: "translate(0%, " + (counter * -100) / 6 + "vh)" },
        {
          duration: scrollDuration,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards",
        }
      );
      backgroundContainer4.animate(
        { transform: "translate(0%, " + (counter * -100) / 8 + "%)" },
        {
          duration: scrollDuration,
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
