import React from "react";
import Her from "../assets/landing.png";
import './hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="text">
          <h1><span>Flavor</span> and <span>Taste</span> As Well As Felling <span>Safe</span> And <span>Refreshed</span> When You Try Our Healthy Drinks ?</h1>

          <p>enjoy our healthy drinks from our hand planted fruits</p>

          <button className="order">TAKE AN ORDER</button>
          <button className="contact">CONTACT</button>
      </div>

      <div className="hero-image">
        <img src={Her} alt="" />
      </div>
    </div>
  );
}

export default Hero;
