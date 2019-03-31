import React, { Component, Fragment } from "react";
import { Link } from "gatsby";
import Navigation from './Navigation';
import MediaQuery from 'react-responsive';
import OffCanvas from 'react-aria-offcanvas';
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

  open = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { config } = this.props;
    const url = config.menuLink;
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
          <div className="nav-toggle" onClick={this.open}>
            <div className="nav-toggle__bar"></div>
            <div className={isOpenAnim}></div>
            <div className="nav-toggle__bar"></div>
          </div>
          </div>
          <MediaQuery maxWidth={1100}>
            <OffCanvas
              isOpen={this.state.isOpen}
              onClose={this.open}
              labelledby="nav-toggle"
              height={"100vh"}
              className={'nav__offCanvas'}
              returnFocusAfterClose={false}
              >
                <Navigation config={config} isMobile={true} navToggle={this.open}/>
                <div onClick={this.open} className="close"></div>
              </OffCanvas>
          </MediaQuery>
          <MediaQuery minWidth={1101}>
            <Navigation config={config} isMobile={false} navToggle={this.open}/>
          </MediaQuery>
        </div>
      </header>
    );
  }
}

export default Header;
