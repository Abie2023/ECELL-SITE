import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top">
            UCOE E-CELL
          </a>{" "}

          {/* Navbar toggle button */}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div className="navbar-logo-container">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="Logo"
            className="navbar-logo"
          />
        </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          {/* Navbar links */}
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#services" className="page-scroll">Activities</a></li>
            <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
            <li><a href="#team" className="page-scroll">Team</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
