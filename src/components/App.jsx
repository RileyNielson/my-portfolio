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
        <h2 style={{ marginRight: "2%" }}>Riley Nielson</h2>
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


function scrollFunction (delta) {
  if (scrolling === false) {
    scrolling = true;
    const container = document.getElementById("container");
    const backgroundContainer = document.getElementById("backgroundContainer");
    const backgroundContainer0 = document.getElementById(
      "backgroundContainer0"
    );
    const backgroundContainer1 = document.getElementById(
      "backgroundContainer1"
    );
    const backgroundContainer2 = document.getElementById(
      "backgroundContainer2"
    );
    const backgroundContainer3 = document.getElementById(
      "backgroundContainer3"
    );
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
      backgroundContainer0.animate(
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
      backgroundContainer1.animate(
        { transform: "translate(0%, " + (counter * -100) / 3 + "vh)" },
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
        { transform: "translate(0%, " + (counter * -100) / 5 + "%)" },
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
};

function wheelScroll(event) {
  const delta = Math.sign(event.deltaY);
  scrollFunction(delta);
}

document.addEventListener("wheel", wheelScroll, false);

document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      console.log("swiped left");
    } else {
      // swiped right
      console.log("swiped right");
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      scrollFunction(1)
      console.log("swiped up");
    } else {
      scrollFunction(-1)
      // swiped down
      console.log("swiped down");
    }  
  }
 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
};




export default App;
