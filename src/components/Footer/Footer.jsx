import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <span>Made with ❤️️ in 🇪🇺 {copyright}</span>
        </div>
        <UserLinks config={config} labeled />
      </footer>
    );
  }
}

export default Footer;
