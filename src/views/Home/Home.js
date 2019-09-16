import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="hotels">
        <div>
          <h4>Hotel Da Rego</h4>
          <p>
            <span>(2, 350)N</span>
            <span>Restaurant</span>
          </p>
          <p>House 13/14, Close 1, Mayfair Gardens Estate, Lagos</p>
          <p>Opens 09:00am to 08:30pm Everyday</p>
          <p>
            Website <a href="https://bloverse.com">https://bloverse.com</a>
          </p>
        </div>
        <img src="/assets/restaurant.jpg"></img>
      </div>
    );
  }
}

export default Home;
