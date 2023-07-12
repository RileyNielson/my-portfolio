function Info(props) {

  const style = {
    gridRow: props.itemsCount,
  };

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

export default Info;
