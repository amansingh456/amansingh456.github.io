import React from "react";
import "../styles/About.css";
import profile from "../Images/proflie.jpeg";
import { BsFillPersonFill } from "react-icons/bs";

export const About = () => {
  return (
    <div className={`about section About`} id="about">
      <div>
        <BsFillPersonFill color="#5fe4c9" fontSize={"25px"} />
        <h2>About Me</h2>
        <div></div>
      </div>

      <div>
        <div>
          <div>
            <p>
              Hello 👋, I am{" "}
              <span style={{ color: "#5fe4c9" }}>Aman Singh Rajawat, </span>a
              passionate full-stack developer with a focus on building seamless
              digital experiences. Since starting my web development journey in
              2021, I’ve worked on diverse projects, evolving into a versatile
              developer skilled in both frontend and backend technologies.
            </p>
            <p id="user-detail-intro">
              With over a year of experience, I specialize in crafting
              user-friendly interfaces using Next.js and React to create
              high-performance web applications with server-side rendering. On
              the backend, I’ve developed robust systems with Go, Node.js, and
              Express, ensuring scalability and efficiency.
            </p>
            <p id="user-detail-intro">
              Let's work together to bring your digital ideas to life! Reach
              out, and let’s create something exceptional. 🚀
            </p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src={profile} className="home-img" alt="profile" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
//
