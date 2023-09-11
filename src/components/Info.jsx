import React from "react";
import Attitude from "./attitude";
import Connect from "./connect";
import icons from "./icons";
import projects from "./projects";

function Info(props) {
  const [index, setIndex] = React.useState(0);

  const style = {
    gridRow: props.itemsCount,
  };

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === Attitude.length - 1 ? 0 : prevIndex + 1
          ),
        5000
      );
    }

    return () => {};
  }, [index]);

  if (props.id === 1) {
    return (
      <div className="infoContainer" style={style}>
        <div id="greeting">Hello there! I'm</div>
        <div className="infoHeading">
          <img className="meImage" src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div id="greeting2">A software developer</div>
      </div>
    );
  } else if (props.id === 2) {
    return (
      <div className="iconContainer" style={style}>
        <div className="iconHeading">
          <h2>{props.title}</h2>
        </div>
        <div className="infoContent">
          <p>{props.content}</p>
        </div>
        {icons.map((item) => {
          return (
            <img
              className="iconImg"
              src={item.src}
              alt={item.alt}
              draggable={false}
            />
          );
        })}
      </div>
    );
  } else if (props.id === 3) {
    return (
      <div className="imgContainer" style={style}>
        <div className="imgHeading">
          <h2>{props.title}</h2>
        </div>
        <div id="projectBox">
          {projects.map((item, index) => {
            return (
              <a
                href={item.href}
                className="imgbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"projImg" + index}
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  } else if (props.id === 4) {
    return (
      <div className="imgContainer" style={style}>
        <div className="imgHeading">
          <h2>{props.title}</h2>
        </div>
        <div id="attSlides">
          <div
            id="slideSlider"
            style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }}
          >
            {Attitude.map((item) => {
              return (
                <div id="attBox">
                  <h3>{item.text}</h3>
                  <h4>-{item.source}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="imgContainer" style={style}>
        <div className="imgHeading">
          <h2>{props.title}</h2>
        </div>
        <div id="mainConnBox">
          {Connect.map((item, index) => {
            return (
              <a
                href={item.href}
                className={"connBox" + index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={"connImg"}
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Info;
