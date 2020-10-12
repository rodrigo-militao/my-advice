import React, { useEffect, useState } from 'react';
import adviceAPI from '../service/AdviceApi';
import logo from '../img/logo.png'

function RandomAdvice() {
  const [advice, setAdvice] = useState('');
  const [width, setWidth] = useState(450);
  const [height, setHeight] = useState(150);
  const [background, setBackground] = useState("#458888");
  const [color, setColor] = useState("#ffff");
  const [fontSize, setFontSize] = useState(25);

  useEffect(() => {
    adviceAPI().then(res => setAdvice(res.slip.advice));
  }, []);

  const styles = {
    containerStyle: {
      backgroundColor: background,
      width: width + "px",
      height: height + "px",
      color: color,
    }
  };
  const { containerStyle } = styles;
  
  return (
    <div id="home">
      <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo random advice" width="130" height="130" className="d-inline-block align-top" />
        </a>
          <form className="d-flex">
            <label htmlFor="width" className="mr-2  col-sm-1">
              Width:
              <input className="form-control" id="width" value={width} onChange={(e) => setWidth(e.target.value)} type="number" placeholder="Width" aria-label="Width"/>
            </label>
            <label htmlFor="height" className="mr-2  col-sm-1">
              Height:
              <input className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)}  type="number" placeholder="Height" aria-label="Height"/>
            </label>
            <label htmlFor="fontsize" className="mr-2  col-sm-1">
              Font Size:
              <input className="form-control" id="fontsize" value={fontSize} onChange={(e) => setFontSize(e.target.value)}  type="number" placeholder="Font-Size" aria-label="Font-Size"/>
            </label>
            <label htmlFor="background" className="mr-2  col-sm-2">
              Background Color:
              <input className="form-control" id="background" value={background} onChange={(e) => setBackground(e.target.value)} type="text" placeholder="Background" aria-label="Background"/>
            </label>
            <label htmlFor="color" className="mr-2  col-sm-2">
              Font Color:
              <input className="form-control" id="color" value={color} onChange={(e) => setColor(e.target.value)}  type="text" placeholder="Font-Color" aria-label="Font-Color"/>
            </label>
          </form>
        </div>
      </nav>
      <div className="RandomAdvice">
        <div className="divAdvice" style={containerStyle}>
          <p className="adviceText" style={{fontSize: fontSize + "px"}}>{advice}</p>
        </div>
        <div className="buttonSeeImg">
          <button className="btn btn-secondary btn-lg btn-block" type="button" id="seeImg">Generate image</button>
        </div>
        <div className="divImage">
          <img id="textScreenshot" src="" />
        </div>
      </div>

    </div>
  );
}

export default RandomAdvice;
