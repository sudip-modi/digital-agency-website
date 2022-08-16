import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMap,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaDesktop,
  FaMobile,
  FaCloudUploadAlt,
  FaBullhorn,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-column footer-col-1">
        <div className="column-item">
          <h3>About us</h3>
        </div>
        <div className="column-item">
          <p>
          Softgenics india is a complete service agency for all your software development needs.
Our services include:
Web development
Ecommerce development
Backend  development
Database development
Web design
ui/ux design
Cms development and customization (Shopify, Wordpress etc.)

We use cutting edge tech and major frameworks like react, angular, django etc. We develop native applications for android  and ios. We also provide hybrid cross platform application development using react native and flutter.

We are an ISO certified company and a leading provider in the offshore development services industry.

Our team has a cumulative 40 years of experience in IT. We have successfully delivered over 100 projects in a large array of industry sectors ranging from real estate, finance, ecommerce, health, music, travel and hospitality etc. We maximise client satisfaction by doing an in depth analysis of our customer’s needs.

We have a strong team of a dozen web developers, android developers, backend engineers, devops specialists, ios programmers, graphic designers, content writers and webmasters that take care of development and maintenance of projects.

We combine creativity and passion to deliver a smooth and efficient product development experience.

Quality assurance is a key part of our job. Hence we use battle tested techniques and processes to ensure that all work is governed in compliance with industry standards and best practices.

We welcome you to the world of softgenics.
          </p>
        </div>

        <div className="phone-number column-item flex flex-row">
          <span className="footer-icon mr-10">
            <FaPhoneAlt className="footer-icon" />
          </span>
          <p>(+91) 938059418</p>
        </div>
        <div className="column-item flex flex-row">
          <span className="footer-icon mr-10">
            <FaEnvelope />
          </span>
          <p>softgenics.private@gmail.com</p>
        </div>
      </div>
      <div className="footer-column footer-col-2">
        <div className="column-item">
          <h3>Services</h3>
        </div>
        <div className="column-item services-item">
          <span className="footer-icon"><FaDesktop/></span>
          <p>Website design</p>
        </div>
        <div className="column-item services-item">
          <span className="footer-icon">
            <FaMobile/>
          </span>
          <p>Mobile app</p>
        </div>
        <div className="column-item services-item">
          <span className="footer-icon">
            <FaCloudUploadAlt/>
          </span>
          <p>Web hosting</p>
        </div>
        <div className="column-item services-item">
          <span className="footer-icon">
            <FaBullhorn/>
          </span>
          <p>Digital marketing</p>
        </div>
      </div>
      <div className="footer-column footer-col-3">
        <div className="column-item">
          <h3>Our offices</h3>
        </div>
        <div className="column-item office-container">
          <h4>Patna</h4>
          <div className="column-sub-item">
            <span className="footer-icon">
              <FaPhoneAlt />
            </span>
            <p>(+91) 9380359418</p>
          </div>
          <div className="column-sub-item">
            <span className="footer-icon">
              <FaMap />
            </span>
            <p>Budha Shubash Enclave,New Jaganpura, Patna, Bihar, 800027</p>
          </div>
        </div>
        <div className="column-item office-container">
          <h4>Delhi NCR</h4>
          <div className="column-sub-item">
            <span className="footer-icon">
              <FaPhoneAlt />
            </span>
            <p>(+91) 9958480084</p>
          </div>
          <div className="column-sub-item">
            <span className="footer-icon">
              <FaMap />
            </span>
            <p>A 12 112 .Gaur city Mall Gr.Noida UP India</p>
          </div>
        </div>
        <div className="column-item office-container">
          <h4>USA</h4>
          <div className="column-sub-item">
            <span className="footer-icon">
              <FaPhoneAlt />
            </span>
            <p>(+1) 949-299-9667</p>
          </div>
          <div className="column-sub-item">
            <span className="footer-icon">
              <FaMap />
            </span>
            <p>Intersection Dale/ Benwood Anaheim, California - 92804 USA</p>
          </div>
        </div>
      </div>
      <div className="footer-column footer-col-4">
        <div className="column-item">
          <input type="text" placeholder="Your name" />
        </div>
        <div className="column-item">
          <input
            type="tel"
            name="telephone"
            id="user-telephone"
            placeholder="Your phone number"
          />
        </div>
        <div className="column-item">
          <input
            type="email"
            name="useremail"
            id="user-email"
            placeholder="Your email address"
          />
        </div>
        <div className="column-item">
          <input
            type="submit"
            placeholder="Get a free quote"
            id="get-quote-btn"
          />
        </div>
        <br />
        <div className="column-item socials">
          <a href="https://www.facebook.com/profile.php?id=100075713184173">
            <span className="footer-icon social-icon facebook-icon">
              <FaFacebook />
            </span>
          </a>
          <a href="https://www.instagram.com/softgenics/">
          <span className="footer-icon social-icon instagram-icon">
            <FaInstagram />
          </span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=8294184184">
            <span className="footer-icon social-icon whatsapp-icon">
                <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// const Footer = () => {
//   return (
//     <div>
//       <footer id="site-footer">
//         <section className="horizontal-footer-section" id="footer-top-section">
//           <div id="footer-logo">
//             <picture>
//               <img
//                 src="https://raw.githubusercontent.com/taviskaron/t-div-headers/main/img/logo3.png"
//                 alt="footer logo"
//                 role="presentation"
//               />
//             </picture>
//           </div>
//           <div id="footer-top-menu-container" role="menubar">
//             <ul id="footer-top-menu" role="menu">
//               <li className="footer-top-menu-item" role="menuitem">
//                 <Link href="#" className="footer-top-menu-link">
//                   IT Services
//                 </Link>
//               </li>
//               <li
//                 className="footer-top-menu-item footer-top-menu-item-active"
//                 role="menuitem"
//               >
//                 <Link href="#" className="footer-top-menu-link">
//                   Web development
//                 </Link>
//               </li>
//               <li className="footer-top-menu-item" role="menuitem">
//                 <Link href="#" className="footer-top-menu-link">
//                   SEO
//                 </Link>
//               </li>
//               <li className="footer-top-menu-item" role="menuitem">
//                 <Link href="#" className="footer-top-menu-link">
//                   UI/UX
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div id="footer-buttons-container">
//             <Link href="#" className="footer-button" role="button">
//               View our Projects
//             </Link>
//           </div>
//         </section>

//         <section
//           className="horizontal-footer-section"
//           id="footer-middle-section"
//         >
//           <div
//             id="footer-about"
//             className="footer-columns footer-columns-large"
//           >
//             <h1>Our Address</h1>
//             <address>
//               <p>
//                 <img
//                   src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png"
//                   alt="address"
//                 />
//                 30/20, Verkhy street, Moscow, Russia
//               </p>
//               <p>
//                 <img
//                   src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png"
//                   alt="number"
//                 />
//                 7 (800) 555-35-35
//               </p>
//               <p>
//                 <img
//                   src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png"
//                   alt="email"
//                 />
//                 noreply@reply.io
//               </p>
//               <p>
//                 <img
//                   src="https://img.icons8.com/ios-filled/14/eeeeee/clock.png"
//                   alt="timings"
//                 />
//                 8:00 AM - 8:00 PM
//               </p>
//             </address>
//             <h1> Our Newsletter</h1>
//             <Link href="#" className="footer-button" role="button">
//               Subscribe
//             </Link>
//           </div>
//           <div className="footer-columns">
//             <h1>Overview</h1>
//             <ul className="footer-column-menu" role="menu">
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Services{" "}
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Pricing
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Portfolio
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   News
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="footer-columns">
//             <h1>Resources</h1>
//             <ul className="footer-column-menu" role="menu">
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   FAQ
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Media
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Guides
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Free Resources
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Testimonials
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="footer-columns">
//             <h1>Information</h1>
//             <ul className="footer-column-menu" role="menu">
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   About Us
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Terms of Use
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item">
//                 <Link
//                   href="#"
//                   className="footer-column-menu-item-link"
//                   role="menuitem"
//                 >
//                   Legal Information
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Message Us
//                 </Link>
//               </li>
//               <li className="footer-column-menu-item" role="menuitem">
//                 <Link href="#" className="footer-column-menu-item-link">
//                   Leave a Feedback
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <section
//           className="horizontal-footer-section"
//           id="footer-bottom-section"
//         >
//           <div id="footer-copyright-info">
//             &copy; Reimu Inc. 2022. All rights reserved.
//           </div>
//           <div id="footer-social-buttons">
//             <img
//               src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"
//               alt="facebook"
//             />
//             <img
//               src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"
//               alt="telegram"
//             />
//             <img
//               src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"
//               alt="pintrest"
//             />
//             <img
//               src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"
//               alt="instagram"
//             />
//           </div>
//         </section>
//       </footer>
//       <p>The adaptive breakpoint here is at 960px.</p>
//     </div>
//   );
// };
