import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { config } = this.props;
    const url = config.menuLink;
    console.log(url);
    const { copyright } = config;
    const logo = config.siteLogo;
    if (!copyright) {
      return null;
    }
    const isOpen = this.state.isOpen ? 'primary-nav visible' : 'primary-nav hidden';
    const isOpenAnim = this.state.isOpen ? 'nav-toggle__bar half half_left' : 'nav-toggle__bar half';
    return (
      <header className="header">
        <div className="header--container">
        <div className="header__mobile">
          <Link to={url[0].link}><img className="logo" src={logo} /></Link>
          <div className="nav-toggle" onClick={this.toggleNav}>
            <div className="nav-toggle__bar"></div>
            <div className={isOpenAnim}></div>
            <div className="nav-toggle__bar"></div>
          </div>
          </div>
          <nav className={isOpen}>
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
