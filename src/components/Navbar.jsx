import React from "react";
import "../styles/nav.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  ">
              <li className="nav-item">
                <a className="nav-link anchor " aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link anchor " aria-current="page" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link anchor " aria-current="page" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <div className="ms-auto">
              <button className="bookbtn">Book Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
