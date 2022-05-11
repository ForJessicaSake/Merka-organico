import React from "react";
import "./Hero.css";
import Heroimage from "../Images/deliverydude.png";

function Hero() {
  return (
    <main className="hero-wrapper">
      <div className="hero-text">
        <h1>We
           Bring The Grocery Store To Your Doorstep</h1>
        <p>Merka is a trusted grocery shop that allows you buy all the necessary food inventory with one click. </p>
        <button>Order Now</button>
      </div>

      <div className="hero-image">
        <img src={ Heroimage} alt="phonecase"></img>
      </div>
    </main>
  );
}
export default Hero;
 