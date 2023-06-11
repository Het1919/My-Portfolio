import React from "react";
import "./About.css";
import ME from "../../assets/Het.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About-Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>10+ Months Working</small>
            </article>
            {/* <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Skills</h5>
              <small>10+ skil</small>
            </article> */}
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            Hello, I'm a hardworking and dedicated individual with expertise in
            React.js,Java technology,Databases,SpringBoot Framework and
            Microservices. I have a deep understanding of front-end development
            using React.js and have successfully implemented responsive and
            user-friendly interfaces. Additionally, my proficiency in Spring and
            Java technology enables me to build scalable and reliable back-end
            systems. I am passionate about continuously improving my skills and
            staying up-to-date with the latest industry trends to deliver
            high-quality solutions.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
