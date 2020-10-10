import React, { useEffect, useState } from 'react';
import adviceAPI from '../service/AdviceApi';

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
    <div>
      <nav className="navbar navbar-light bg-light center">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control mr-2" value={width} onChange={(e) => setWidth(e.target.value)} type="text" placeholder="Width" aria-label="Width"/>
            <input className="form-control mr-2" value={height} onChange={(e) => setHeight(e.target.value)}  type="text" placeholder="Height" aria-label="Height"/>
            <input className="form-control mr-2" value={background} onChange={(e) => setBackground(e.target.value)} type="text" placeholder="Background" aria-label="Background"/>
            <input className="form-control mr-2" value={color} onChange={(e) => setColor(e.target.value)}  type="text" placeholder="Font-Color" aria-label="Font-Color"/>
            <input className="form-control mr-2" value={fontSize} onChange={(e) => setFontSize(e.target.value)}  type="text" placeholder="Font-Size" aria-label="Font-Size"/>
          </form>
        </div>
      </nav>
      <div className="RandomAdvice">
        <div className="divAdvice" style={containerStyle}>
          <p className="adviceText" style={{fontSize: fontSize + "px"}}>{advice}</p>
        </div>
        <div className="buttonSeeImg">
          <button className="btn btn-secondary btn-lg btn-block" type="button" id="seeImg">Download image</button>
        </div>
        <div className="divImage">
          <img id="textScreenshot" src="" />
        </div>
      </div>

    </div>
  );
}

export default RandomAdvice;
