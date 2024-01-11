import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactInfo from '../assets/JSON/contactInfo.json';
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column" id="logo">
        <div className="logo">
          <img src={logo} alt="logo" width="75px" height="75px" />
        </div>
      </div>
      <div className="footer-column">
        <div className="quick-links" id="quick">
          <p>Quick Links</p>
          <p>Marketplace</p>
          <p>About Us</p>
          <p>How It Works</p>
          <p>Community</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="quick-links" id="quick2">
          <p>Quick Links</p>
          <p>Media</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="legal">
          <p>Legal</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>AML KYC Policy</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="contact-info">
          <p>Contact</p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            <a id="email-info">Email: {contactInfo.email}</a>
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>{" "}
            Phone: {contactInfo.phone}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>{" "}
            <a id="google" href={contactInfo.map} target="_blank" rel="noopener noreferrer">
            {contactInfo.address}
            </a>
          </p>
        </div>
      </div>
      <div className="footer-column">
        <div className="newsletter">
          <p>
            Subscribe to our newsletter
          </p>
          <div className="input">
          <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
          <input id="email" type="text" placeholder="Email Address" />
          </div>
          <button>
            Subscribe <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      <div className="social-media-icons">
        <span id="discord">
          <i className="fab fa-discord"></i>
        </span>
        <span id="insta">
          <i className="fab fa-instagram"></i>
        </span>
        <span id="tiktok">
          <i className="fab fa-tiktok"></i>
        </span>
        <span id="facebook">
          <i className="fab fa-facebook"></i>
        </span>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2023-2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
