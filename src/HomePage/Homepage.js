import React from "react";
import { Helmet } from "react-helmet";

import "./Homepage.css";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import ContactUsSection from "./ContactUsSection/ContactUsSection";

const Homepage = () => {

  return (
    <>
    <Helmet>
    <title>SwitechAI - Professional Web Development Services</title>
    <meta
      name="description"
      content="SwitechAI offers professional web development services, including portfolio creation, service offerings, and client contact options. Let us build your dream website!"
    />
    <meta name="keywords" content="Web Development, Portfolio, Services, Contact" />
    <meta name="author" content="SwitechAI" />
     {/* JSON-LD structured data for rich results */}
     <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.switechai.com",
            "name": "SwitechAI",
            "description": "Professional web development services.",
          })}
      </script>
  </Helmet>
    <main className="homepage">
      <section id="heroSection">
        <HeroSection />  
      </section>
      <section id="servicesSection">
        <ServicesSection />     
      </section>
      <section id="portfolioSection">
        <PortfolioSection />
      </section>
      <section id="contactUsSection">
        <ContactUsSection />
      </section>  
    </main>
    </>
  );
};

export default Homepage;
