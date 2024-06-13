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
              Hello 👋, My name is{" "}
              <span style={{ color: "#5fe4c9" }}>Aman Singh Rajawat,</span> a
              passionate creator shaping the digital realm. My journey into web
              development ignited in 2021
            </p>
            <p id="user-detail-intro">
              With over 10 months of hands-on experience, I've evolved into a
              full-stack developer adept in an array of technologies. From
              crafting seamless user experiences with HTML, CSS, and JavaScript,
              TypeScript to architecting robust backends with Go & Node and
              building dynamic interfaces with React & Next, I thrive on the
              dynamic challenges of modern web development.
            </p>
            <p id="user-detail-intro">
              Let's collaborate to turn your digital dreams into reality. Reach
              out, and let's build something remarkable together! 🚀
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
