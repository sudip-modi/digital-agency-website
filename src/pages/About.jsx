import React from "react";
import Footer from "../components/Footer/Footer";
import "./css/About.css";

const About = () => {
  return (
    <>
      <div style={{ marginTop: "200px;" }} id="about">
        <h1>Who We Are</h1>
        <p>
          Softgenics india is a complete service agency for all your software
          development needs. Our services include: Web development Ecommerce
          development Backend development Database development Web design ui/ux
          design Cms development and customization (Shopify, Wordpress etc.) We
          use cutting edge tech and major frameworks like react, angular, django
          etc. We develop native applications for android and ios. We also
          provide hybrid cross platform application development using react
          native and flutter. We are an ISO certified company and a leading
          provider in the offshore development services industry. Our team has a
          cumulative 40 years of experience in IT. We have successfully
          delivered over 100 projects in a large array of industry sectors
          ranging from real estate, finance, ecommerce, health, music, travel
          and hospitality etc. We maximise client satisfaction by doing an in
          depth analysis of our customer’s needs. We have a strong team of a
          dozen web developers, android developers, backend engineers, devops
          specialists, ios programmers, graphic designers, content writers and
          webmasters that take care of development and maintenance of projects.
          We combine creativity and passion to deliver a smooth and efficient
          product development experience. Quality assurance is a key part of our
          job. Hence we use battle tested techniques and processes to ensure
          that all work is governed in compliance with industry standards and
          best practices. We welcome you to the world of softgenics.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
