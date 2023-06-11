import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        HET SHAH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.instagram.com/mr._het_19/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/Hetshah191"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/het-shah1919/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Het1919" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; HET SHAH . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
