import React from "react";
import "./Portfolio.css";
import Me from "../../assets/Me.png";
import karKaushal from "../../assets/Karkaushal.png";

// const data = [
//   {
//     id: 1,
//     image: Me,
//     title: "Project Title",
//     github: "https://github.com",
//     demo: "https://dribble.com",
//   },
//   {
//     id: 2,
//     image: Me,
//     title: "Project Title",
//     github: "https://github.com",
//     demo: "https://dribble.com",
//   },
//   {
//     id: 3,
//     image: Me,
//     title: "Project Title",
//     github: "https://github.com",
//     demo: "https://dribble.com",
//   },
//   {
//     id: 4,
//     image: Me,
//     title: "Project Title",
//     github: "https://github.com",
//     demo: "https://dribble.com",
//   },
//   {
//     id: 5,
//     image: Me,
//     title: "Project Title",
//     github: "https://github.com",
//     demo: "https://dribble.com",
//   },
//   {
//     id: 6,
//     image: Me,
//     title: "Project Title",
//     github: "https://github.com",
//     demo: "https://dribble.com",
//   },
// ];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://cdn.dribbble.com/userupload/3652428/file/original-c5a8eb5b7e06ae5fa3bb3255ec506bb1.jpg?compress=1&resize=640x480&vertical=center"
              alt="Project"
            />
          </div>
          <h3>KarKaushal</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Het1919/karkaushal"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://www.karkaushal.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://cdn.dribbble.com/userupload/5489218/file/original-da6802bfc7dc79ba02ad3810d784cbcb.png?compress=1&resize=640x480&vertical=center"
              alt="Project"
            />
          </div>
          <h3>Hotel Rating Service</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Het1919/Hotel-Rating-Service"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {/* <a
              href="http://www.karkaushal.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://cdn.dribbble.com/userupload/5356202/file/original-17e52a51dd723a1e424f5391e8b731f4.png?compress=1&resize=640x480&vertical=center"
              alt="Project"
            />
          </div>
          <h3>Smart Contact Manager</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Het1919/Smart-Contact-Manager---Spring-Boot"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {/* <a
              href="http://www.karkaushal.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://cdn.dribbble.com/userupload/5156561/file/original-84f7b10eaa7e1c4402a1fa9bc033f3e7.png?compress=1&resize=640x480&vertical=center"
              alt="Project"
            />
          </div>
          <h3>MyCart</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Het1919/Ecommerce-Java"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {/* <a
              href="http://www.karkaushal.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://cdn.dribbble.com/users/4167503/screenshots/17726302/media/b34bf22f18b6f15abf263d7432e3b283.png?compress=1&resize=640x480&vertical=center"
              alt="Project"
            />
          </div>
          <h3>Student CRUD APP</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Het1919/ServletMVCApp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {/* <a
              href="http://www.karkaushal.in/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://cdn.dribbble.com/users/2667413/screenshots/14983661/media/caba3efeeefdbfc4205bacdb92674b55.png?compress=1&resize=450x338&vertical=center"
              alt="Project"
            />
          </div>
          <h3>Microsoft Clone</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Het1919/Microsoft-Clone-Using-Tailwind-CSS"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://microsoftclone-xi.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
