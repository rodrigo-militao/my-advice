import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import adviceAPI from '../service/AdviceApi';
import TopMenu from '../components/TopMenu';

function RandomAdvice() {
  const [advice, setAdvice] = useState('');
  const [width, setWidth] = useState(450);
  const [height, setHeight] = useState(250);
  const [background, setBackground] = useState("#458888");
  const [fontColor, setFontColor] = useState("#ffff");
  const [fontSize, setFontSize] = useState(25);

  useEffect(() => {
    adviceAPI().then(res => setAdvice(res.slip.advice));
  }, []);

  const styles = {
    containerStyle: {
      backgroundColor: background,
      width: width + "px",
      height: height + "px",
      color: fontColor,
    }
  };
  const { containerStyle } = styles;
  
  return (
    <div id="home">
      <TopMenu />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse p-5">
            <div className="position-sticky pt-3 pb-5 text-center">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <label htmlFor="width" className="mb-4">
                    Width:
                    <input className="form-control" id="width" value={width} onChange={(e) => setWidth(e.target.value)} type="number" placeholder="Width" aria-label="Width"/>
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="height" className="mb-4">
                    Height:
                    <input className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)}  type="number" placeholder="Height" aria-label="Height"/>
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="fontsize" className="mb-4">
                    Font Size:
                    <input className="form-control" id="fontsize" value={fontSize} onChange={(e) => setFontSize(e.target.value)}  type="number" placeholder="Font-Size" aria-label="Font-Size"/>
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="background" className="mb-4">
                    Background Color:
                    <ChromePicker 
                      color={ background }
                      onChangeComplete={ (color) => setBackground(color.hex) }
                    />
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="fontColor" className="mb-4">
                    Font Color:
                    <ChromePicker 
                      color={ fontColor }
                      onChangeComplete={ (color) => setFontColor(color.hex) }
                    />
                  </label>
                </li>
              </ul>
            </div>
          </nav>
          <div className="RandomAdvice col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="divAdvice" style={containerStyle}>
              <p className="adviceText" style={{fontSize: fontSize + "px"}}>{advice}</p>
            </div>
            <div className="buttonSeeImg mt-5">
              <button className="btn btn-secondary btn-lg btn-block" type="button" id="seeImg">Generate image</button>
            </div>
            <div className="divImage mt-5">
              <img id="textScreenshot" src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomAdvice;
