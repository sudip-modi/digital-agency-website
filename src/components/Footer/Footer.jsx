import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
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
const Footer = ()=>{
    return (
        <div>
            Hi this is footer
        </div>
    )
}

export default Footer;
