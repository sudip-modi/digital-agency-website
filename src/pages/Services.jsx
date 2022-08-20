import React from "react";
import Footer from "../components/Footer/Footer";
import "./css/Services.css";
import itconsultation from "../assets/images/itconsultaion.png";

const Services = () => {
  return (
    <>
      <div className="services-container">
        <h5>OUR SERVICES</h5>
        <p>
          <strong>Perfect IT Solutions</strong> For Your Business
        </p>
        <div className="services-card-container">
          <div className="services-card-row">
            <div className="services-card">
              <div className="card-row-top">
                <h3>IT Consultation</h3>
                <span>01</span>
              </div>
              <div className="card-row-middle">
                <img
                  src={itconsultation}
                  alt="it consultation"
                  className="services-card-img"
                ></img>
                <p>
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech & app
                </p>
              </div>
              <div className="card-row-bottom">
                <div className="tags">
                  <button>Strategy</button>
                  <button>Consultation</button>
                  <button>Management</button>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="card-row-top">
                <h3>IT Consultation</h3>
                <span>01</span>
              </div>
              <div className="card-row-middle">
                <img
                  src={itconsultation}
                  alt="it consultation"
                  className="services-card-img"
                ></img>
                <p>
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech & app
                </p>
              </div>
              <div className="card-row-bottom">
                <div className="tags">
                  <button>Strategy</button>
                  <button>Consultation</button>
                  <button>Management</button>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="card-row-top">
                <h3>IT Consultation</h3>
                <span>01</span>
              </div>
              <div className="card-row-middle">
                <img
                  src={itconsultation}
                  alt="it consultation"
                  className="services-card-img"
                ></img>
                <p>
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech & app
                </p>
              </div>
              <div className="card-row-bottom">
                <div className="tags">
                  <button>Strategy</button>
                  <button>Consultation</button>
                  <button>Management</button>
                </div>
              </div>
            </div>
          </div>
          <div className="services-card-row">
            <div className="services-card">
              <div className="card-row-top">
                <h3>IT Consultation</h3>
                <span>01</span>
              </div>
              <div className="card-row-middle">
                <img
                  src={itconsultation}
                  alt="it consultation"
                  className="services-card-img"
                ></img>
                <p>
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech & app
                </p>
              </div>
              <div className="card-row-bottom">
                <div className="tags">
                  <button>Strategy</button>
                  <button>Consultation</button>
                  <button>Management</button>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="card-row-top">
                <h3>IT Consultation</h3>
                <span>01</span>
              </div>
              <div className="card-row-middle">
                <img
                  src={itconsultation}
                  alt="it consultation"
                  className="services-card-img"
                ></img>
                <p>
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech & app
                </p>
              </div>
              <div className="card-row-bottom">
                <div className="tags">
                  <button>Strategy</button>
                  <button>Consultation</button>
                  <button>Management</button>
                </div>
              </div>
            </div>
            <div className="services-card">
              <div className="card-row-top">
                <h3>IT Consultation</h3>
                <span>01</span>
              </div>
              <div className="card-row-middle">
                <img
                  src={itconsultation}
                  alt="it consultation"
                  className="services-card-img"
                ></img>
                <p>
                  Trust our top minds to eliminate workflow pain points,
                  implement new tech & app
                </p>
              </div>
              <div className="card-row-bottom">
                <div className="tags">
                  <button>Strategy</button>
                  <button>Consultation</button>
                  <button>Management</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
