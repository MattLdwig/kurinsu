import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import OffCanvas from 'react-aria-offcanvas';
import "./Header.css";

class Navigation extends Component {

  render() {
    const { config } = this.props;
    const url = config.menuLink;
    return (
        <nav id="menu">
        <ul className="primary-nav__items">
            <li className="item"><Link to={url[0].link}>🏠 ACCUEIL</Link></li> 
            <li className="item"><Link to={url[1].link}>⚙️ PRODUCTIVITÉ</Link></li>
            <li className="item"><Link to={url[2].link}>💡 INSPIRATION</Link></li>
            <li className="item no-margin"><Link to={url[3].link}>🕊️ DÉVELOPPEMENT</Link></li>
        </ul>
        </nav>
    );
  }
}

export default Navigation;
