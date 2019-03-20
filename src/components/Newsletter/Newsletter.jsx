import React, { Component } from "react";
import { Link } from "gatsby";
import "./Newsletter.css";

class Newsletter extends Component {
  render() {
    return (
        <div className="newsletter-container" id="newsletter">
          <div className="newsletter__info">
            <h2 className="newsletter__title">Restons en contact</h2>
            <p className="newsletter__sub">Recevez les derniers articles directement dans votre boite mail.</p>
            <input type="email" className="form-control" placeholder="Votre Email"></input>
            <button className="btn" type="submit">Je m'inscris</button>
          </div>
          <div className="newsletter__illustration"></div>
        </div>
    );
  }
}

export default Newsletter;
