function Info(props) {
  const style = {
    gridRow: props.itemsCount,
  };

  if (props.id === 1) {
    return (
      <div className="infoContainer" style={style}>
        <div id="greeting">Hello there! I'm</div>
        <div className="infoHeading">
          <h2>{props.title}</h2>
          <img
            className="meImage"
            onerror="this.style.display = 'none';"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>
        <div className="infoContent">
          <p>{props.content}</p>
        </div>
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
