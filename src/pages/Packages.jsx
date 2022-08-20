import React from "react";
import gold from "../assets/images/gold.jpg";
import "./css/Packages.css";
import silver from "../assets/images/silver.jpg";
import bronze from "../assets/images/bronze.jpg";
import Footer from "../components/Footer/Footer";

const Packages = () => {
  return (
    <>
      <div className="packages-container">
        <div className="package-card">
          <div className="package-img-container">
            <img src={gold} alt="premium-package" className="package-image" />
          </div>
          <div className="package-text-container">
            <h2>Premium</h2>
            <p>
            + Multiple Business Email id
            + Unlimited Pages Dynamic Website
            + SSL Certificate
            + Mobile Friendly Website
            + Admin Panel to change contents in your Website
            Free Domain Name
            Unlimited Images & Videos uploading features
            Unlimited Trafic Control and space
            SEO Ready Website
            100% Responsive Website
            Live Chat with Whatsapp Integration
            Payment Gateway Integration
            Social Media Integration
            24*7 Support
            </p>
          </div>
          <div className="package-button-container">
            <button className="pay-now">Pay Now</button>
          </div>
        </div>
        <div className="package-card">
          <div className="package-img-container">
            <img src={silver} alt="premium-package" className="package-image" />
          </div>
          <div className="package-text-container">
            <h2>Classic</h2>
            <p>
              + Multiple Business Email id + Unlimited Pages Dynamic Website +
              SSL Certificate + Mobile Friendly Website + Admin Panel to change
              contents in your Website Free Domain Name Unlimited Images &
              Videos uploading features Unlimited Trafic Control and space SEO
              Ready Website 100% Responsive Website Live Chat with Whatsapp
              Integration Payment Gateway Integration Social Media Integration
              24*7 Support
            </p>
          </div>
          <div className="package-button-container">
            <button className="pay-now">Pay Now</button>
          </div>
        </div>
        <div className="package-card">
          <div className="package-img-container">
            <img src={bronze} alt="premium-package" className="package-image" />
          </div>
          <div className="package-text-container">
            <h2>Basic</h2>
            <p>
            Free Domain Name
            5 Pages Dynamic Website
            Unlimited Images & Videos uploading features
            Unlimited Trafic Control and space
            SEO Ready Website
            100% Responsive Website
            Live Chat with Whatsapp Integration
            Payment Gateway Integration
            Social Media Integration
            24*7 Support
            </p>
          </div>
          <div className="package-button-container">
            <button className="pay-now">Pay Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Packages;
