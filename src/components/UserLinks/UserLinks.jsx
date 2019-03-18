import React, { Component } from "react";
import { Link } from "gatsby";
import "./UserLinks.css";


class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a className="user-links" key={link.label} href={link.url}>
        <img src={link.icon} className="user-links__social"/>
      </a>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
