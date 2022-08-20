import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./css/Contact.css";
import globe from "../assets/images/globe.svg";
import { TextField } from "@mui/material";

const inquiries = [
  {
    value: "One",
    label: "One",
  },
  {
    value: "Two",
    label: "Two",
  },
  {
    value: "Three",
    label: "Three",
  },
];

const Contact = () => {
  const [inquiry, setInquiry] = useState("");

  const handleInquiry = (event) => {
    setInquiry(event.target.value);
  };

  return (
    <>
      <div className="contact-container">
        <h5>CONTACT US</h5>
        <h2>
          <strong>Request Free</strong> Consultancy
        </h2>
        <div className="contact-info-container">
          <div className="contact-info-box">
            <div className="info-box-top">
              <p>Hotline 24/7</p>
              <p className="hotline-number">+91 9380359418</p>
            </div>
            <div className="info-box-middle">
              <p>
                <strong>Address:</strong>Budha Shubash Enclave,New
                Jaganpura,Patna,Bihar,800027{" "}
              </p>
              <p>
                <strong>Email:</strong> softgenics.private@gmail.com
              </p>
              <p>
                <strong>Business Hours:</strong> Mon - Sat: 9:00 - 18:00
              </p>
            </div>
            <div className="info-box-bottom">
              <Link to="/location" className="get-direction">
                GET DIRECTION
              </Link>
            </div>
          </div>
          <div className="contact-info-box flex flex-col">
            <div className="info-box-top flex flex-col">
              <TextField id="user-name" label="Name *" variant="standard" />
              <TextField
                id="user-name"
                label="Email Address *"
                variant="standard"
              />
            </div>
            <div className="info-box-middle flex flex-row">
              <TextField
                id="options"
                select
                label="Your Inquiry About"
                variant="standard"
                onChange={handleInquiry}
                helperText="Please select your inquiry"
                SelectProps={{
                  native: true,
                }}
                value={inquiry}
              >
                {inquiries.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className="info-box-bottom">
              <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Your inquiry here"
                variant="filled"
              />
            </div>
          </div>
        </div>
        <img src={globe} alt="globe" className="globe" />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
