import React from "react";
import "./Services.css";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>
                As an UI/UX Developer, I specialize in crafting visually
                appealing and intuitive user interfaces.
              </p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>
                With expertise in React.js, Bootstrap, CSS, and JavaScript, I
                have the skills to design and develop modern and responsive web
                applications.
              </p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>
                I can deliver aesthetically pleasing designs combined with
                smooth functionality to create engaging and interactive user
                interfaces.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
