import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/het-shah1919/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Het1919" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/mr._het_19/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
