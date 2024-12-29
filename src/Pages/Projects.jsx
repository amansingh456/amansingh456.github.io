import React from "react";
import "../styles/Projects.css";
import { TbExternalLink } from "react-icons/tb";
import { HiFolder } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Blissy from "../Images/newBlisy.png";
import music from "../Images/Music-app.png";
export const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div>
        <HiFolder color="#5fe4c9" fontSize={"25px"} />
        <h2>Projects</h2>
        <div></div>
      </div>

      <div className={"grids"}>
        {/* for project one */}
        <div className="project-card">
          <div>
            <img src={Blissy} alt="Kindmeal" />
          </div>
          <div>
            <a
              href="https://github.com/amansingh456/blissy-website"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className="project-github-link"
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a href="https://blissy.tech" target="_blank" rel="noreferrer">
              <TbExternalLink
                className={`project-deployed-link`}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Blissy</h3>
              <p className="project-description">
                It is an mobile app where introverts can connect with random
                people for conversations and support. It offers a safe space for
                users to make friends and seek guidance from trained healers for
                issues like breakup or divorce
              </p>
            </div>
            <div className="project-tech-stack">
              <p>Node</p>
              <p>TypeScript</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>Web-Sockets</p>
              <p>WebRTC</p>
            </div>
          </div>
        </div>
        {/* 2nd project */}

        {/* 4th project */}
        <div className="project-card">
          <div>
            <img src={music} alt="Diapers" />
          </div>
          <div>
            <a
              href="https://github.com/amansingh456/Simple-Music"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub
                color="#5fe4c9"
                fontSize={"35px"}
                className={"project-github-link"}
                fontWeight="light"
                cursor={"pointer"}
              />
            </a>
            <a
              href="https://real-music-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <TbExternalLink
                className={"project-deployed-link"}
                fontSize={"30px"}
              />
            </a>
          </div>
          <div>
            <div>
              <h3 className="project-title">Basic Music App</h3>
              <p className="project-description">
                A Simple Music Web-App, where users can enjoy a curated
                selection of tunes while effortlessly controlling playback with
                intuitive features like Play, Pause, Next, and Previous. Enhance
                your listening experience with seamless navigation and
                easy-to-use functionality
              </p>
            </div>
            <div className="project-tech-stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
