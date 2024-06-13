import React from "react";
import styles from "../styles/Home.module.css";
export const Home = () => {
  return (
    <div className={styles.Home} id="home">
      <p>Hi, my name is</p>
      <div>
        <h1 id="user-detail-name">Aman Rajawat</h1>
        <h1>I build things for the web</h1>
      </div>
      <div>
        <p id="user-detail-intro">
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered{" "}
          <span
            style={{
              color: "#5fe4c9",
            }}
          >
            web-applications
          </span>
          .
        </p>
      </div>
      <div>
        <button
          type="button"
          id="resume-button-2"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/137MhCg2X815aTp-SMZnNuXC8uBbxLcyk/view?usp=drive_link",
              "_blank"
            );
          }}
        >
          <a href="/Aman-Singh-Rajawat-Resume.pdf" id="resume-link-2" download>
            Resume
          </a>
        </button>
        {/* <button >About me</button> */}
      </div>
    </div>
  );
};
