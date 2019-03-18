import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Header.css";

class Header extends Component {
  render() {
    const { config } = this.props;
    const url = config.menuLink;
    console.log(url);
    const { copyright } = config;
    const logo = config.siteLogo;
    if (!copyright) {
      return null;
    }
    return (
      <header className="header">
        <div className="header--container">
          <Link to={url[0].link}><img className="logo" src={logo} /></Link>
          <nav className="primary-nav">
            <ul className="primary-nav__items">
              <li className="item"><Link to={url[1].link}>⚙️ PRODUCTIVITÉ</Link></li>
              <li className="item"><Link to={url[2].link}>💡 INSPIRATION</Link></li>
              <li className="item"><Link to={url[3].link}>🕊️ DÉVELOPPEMENT</Link></li>
              <li className="item no-margin"><Link to={url[4].link}>💌 NEWSLETTER</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
