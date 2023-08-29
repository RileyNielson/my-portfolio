import icons from "./icons";

function Info(props) {
  const style = {
    gridRow: props.itemsCount,
  };

  const iconStyle = {
    height: "100px",
    width: "100%",
    objectFit: "contain",
    position: "relative",
    alignSelf: "center",
    justifySelf: "center",
  };
 
  if (props.id === 1) {
    return (
      <div className="infoContainer" style={style}>
        <div id="greeting">Hello there! I'm</div>
        <div className="infoHeading">
          <h2>{props.title}</h2>
          <img className="meImage" src={props.imgSrc} alt={props.imgAlt} />
        </div>
      </div>
    );
  } else if (props.id === 2) {
    return (
      <div className="infoContainer" style={style}>
        <div className="infoHeading">
          <h2>{props.title}</h2>
        </div>
        <div className="infoContent">
          <p>{props.content}</p>
        </div>
        {icons.map((item) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              style={iconStyle}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="infoContainer" style={style}>
        <div className="infoHeading">
          <h2>{props.title}</h2>
        </div>
        <div className="infoContent">
          <p>{props.content}</p>
        </div>
      </div>
    );
  }
}

export default Info;
