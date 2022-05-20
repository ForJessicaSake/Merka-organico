import React from "react";
import "./Hero.css";
import Heroimage from "../images/deliverydude.png";
import { motion } from 'framer-motion';

function Hero() {

  const heroVariant = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5, duration: 5, type: 'spring', stiffness: 200
      }
    }

  }

  return (
    <motion.main className="hero-wrapper"
      variants={heroVariant}
      initial='hidden'
      animate='visible'
    >
      <motion.div className="hero-text"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 3, type: 'spring', stiffness: 200 }}
      >
        <h1>We
          Bring The Grocery Store To Your Doorstep</h1>
        <p>Merka is a trusted grocery shop that allows you buy all the necessary food inventory with one click. </p>

        <motion.button
          whileHover={{ scale: 1.2, originX: 0, }}
          transition={{ yoyo: 25 }}
        ><a href="#Sale">Order Now</a></motion.button>
      </motion.div>

      <div className="hero-image">
        <img src={Heroimage} alt="phonecase"></img>
      </div>
    </motion.main>
  );
}
export default Hero;
