import React, { Component } from "react";
import { Link } from "react-router-dom";
//import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">
            <Link to="/personas" className="link">
              Personas
            </Link>
          </a>

          <a className="navbar-brand">
            <Link to="/acercade" className="link">
              Acerca De
            </Link>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
