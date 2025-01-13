import React from 'react'
import "./HeroSection.css"
import backgroundImage from "../../Images/heroimg.jpg";

export default function HeroSection() {
  return (
    <div className="hero">
    <div className="hero-image">
      <img
        src={backgroundImage}
        alt="A professional web designer working on a website"
        className="w-full h-auto"
      />
    </div>
    <div className="hero-text ">
      <h1 className=" hero-h1">
        Custom Software, <br></br>AI-Powered Virtual Assistants, <br></br> and
        Seamless Digital Solutions.
      </h1>
      <p className="hero-p">Automate Your Business Processes.</p>
      <p className="hero-p">Elevate Your Digital Transformation Today.</p>
      <button href="#contact" class="btn-primary">Get Your Free Quote</button>
    </div>
  </div>
  )
}
