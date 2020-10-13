import React from 'react';
import logo from '../img/logo.png'


function TopMenu() {
  return (
    <header className="navbar navbar-dark sticky-top d-flex justify-content-around p-0 shadow text-center"  style={{backgroundColor: "#e3f2fd"}}>
      <h1 className="text-primary">Get your Random Advice, and save it as an image.</h1>
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
        <img src={logo} alt="Logo random advice" width="80" height="80" className="d-inline-block align-top" />
      </a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </header>
  );
}

export default TopMenu;