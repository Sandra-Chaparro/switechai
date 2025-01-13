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
      <h1 className="hero-h1h2">
        Custom Web Development,
      </h1>
      <h2 className="hero-h1h2">
        <span>
          AI-Powered Virtual Assistants,
        </span>
        <span>
          and Seamless Software Solutions.
        </span>
      </h2>
     
      <p className="hero-p">Automate Your Business with AI-Powered Solutions.</p>
      <p className="hero-p">Elevate Your Web Development and Digital Transformation Today.</p>
      <a href="#contact" className="quote-link">Get Your Free Quote</a>

    </div>
  </div>
  )
}
