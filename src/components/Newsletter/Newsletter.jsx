import React, { Component } from "react";
import { Link } from "gatsby";
import "./Newsletter.css";

class Newsletter extends Component {
  render() {
    return (
        <div className="newsletter-container">
          <div className="newsletter__info">
            <h2 className="newsletter__title">Restons en contact</h2>
            <p className="newsletter__sub">Recevez les derniers articles directement dans votre boite mail.</p>
            <input type="email" class="form-control" placeholder="Votre Email"></input>
            <button class="btn" type="submit">Je m'inscris</button>
          </div>
          <div className="newsletter__illustration"></div>
        </div>
    );
  }
}

export default Newsletter;
