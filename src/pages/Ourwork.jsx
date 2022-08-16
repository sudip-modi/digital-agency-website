import React from 'react'
import sd from "../assets/images/shreedurga.png";
import "./css/Ourwork.css";

const Ourwork = () => {
  return (
    <div className="ourwork-container">
    <h1>
        Our Work
    </h1>
    <div className="website-card-container">
        <div className="website-card">
            <div className="website-img-container">
                <img src={sd} alt="shree durga clinic"/>
            </div>
            <div className="about-website-container">
                <p className="website-description">Shree Durga Dental Clinic has a well-equipped clinic with all the modern equipment. The clinic has separate waiting and consultation areas which allow enough space for patients to wait conveniently at the clinic.</p>
                <a href="https://sharp-swirles-a1a601.netlify.app/#service" target="_blank" rel="noreferrer">Visit website</a>
            </div>
        </div>
        <div className="website-card">

        </div>
    </div>
    </div>
  )
}

export default Ourwork