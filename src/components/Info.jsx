function Info(props) {
  const style = {
    gridRow: props.itemsCount,
  };

  const iconStyle = {position: "relative", alignSelf:"center", justifySelf:"center" };

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
        <img
          src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
          alt="HTML5 Powered"
          title="HTML5 Powered"
          height={"100px"}
          style={iconStyle}
        />
        <img
          alt="CSS3 logo and wordmark"
          src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
          height={"100px"}
          style={iconStyle}
        />
        <img
          alt="React logo and wordmark"
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          height={"100px"}
          style={iconStyle}
        />
        <img
          alt="Nodejs logo and wordmark"
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"
          height={"100px"}
          style={iconStyle}
        />
        <img
          alt="MongoDB logo and wordmark"
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
          height={"100px"}
          style={iconStyle}
        />
        <div></div>
        <img
          alt="Javascript logo and wordmark"
          src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"
          height={"100px"}
          style={iconStyle}
        />
        <img
          alt="Jquery logo and wordmark"
          src="https://www.vectorlogo.zone/logos/jquery/jquery-horizontal.svg"
          height={"100px"}
          style={iconStyle}
        />
        <div></div>
        <div></div>
        <img
          alt="Git logo and wordmark"
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg"
          height={"100px"}
          style={iconStyle}
        />
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
