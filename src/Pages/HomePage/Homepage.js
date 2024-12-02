import React from "react";
import backgroundImage from "../../Images/heroimg.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-image">
          <img
            src={backgroundImage}
            alt="Tech Image"
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
        </div>
      </div>
      <div className="services">SERVICES</div>
      <div className="portfolio">PORTFOLIO</div>
      <div className="contactus">CONTACT US</div>
    </div>
  );
};

export default Homepage;
