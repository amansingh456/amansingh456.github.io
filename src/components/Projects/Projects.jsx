import React from "react";
import img1 from "./projectImg/movie-app.jpg";
import img2 from "./projectImg/spiritsvilla.jpg";
import img3 from "./projectImg/Music App.jpg";
import img4 from "./projectImg/fraudy.jpg";
import img5 from "./projectImg/blog.jpg";
import img6 from "./projectImg/airBnbLike.jpg";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiFirebase } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { MdLanguage } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandMysql } from "react-icons/tb"
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projectWrapper" id="project">
      <p>Projects</p>
      <div className="projects">
        <div className="project5" style={{ color: "#ffffff" }}>
          <img src={img5} alt="img1" />
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                fontFamily: "Poppins",
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              BlogCuvette
            </p>
            <p
              style={{
                color: "#ffffff",
                padding: "0 20px 0 20px",
                fontFamily: "Poppins",
                marginBottom: "10px",
              }}
            >
              This is a fullstack BlogApp, where user can do post a blog and can do comment on himself blog and others blog.            </p>
            <div className="techStack" style={{ padding: "0 20px 0 20px" }}>
              <p style={{ fontFamily: "Poppins", color: "#ffffff" }}>
                Tech Stacks Used &nbsp;:&nbsp;&nbsp;{" "}
              </p>
              <TbBrandMysql
                style={{ fontSize: "22px", color: "#fe9401" }}
              />
              &nbsp;|&nbsp;
              <SiExpress style={{ fontSize: "22px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <IoLogoNodejs style={{ fontSize: "22px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <FaReact style={{ fontSize: "20px", color: "#fe9401" }} />
              {/* &nbsp;|&nbsp;
              <SiRedux style={{ fontSize: "20px", color: "#fe9401" }} /> */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px 0 20px",
              marginTop: "25px",
            }}
          >
            <a
              href="http://ec2-13-48-46-179.eu-north-1.compute.amazonaws.com:3000/"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <MdLanguage style={{ fontSize: "20px" }} />
              </button>
            </a>{" "}
            <a
              href="https://github.com/amansingh456/blogCuvette"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }} >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <AiFillGithub style={{ fontSize: "20px" }} />
              </button>
            </a>
          </div>
        </div>
        <div className="project6" style={{ color: "#ffffff" }}>
          <img src={img6} alt="img1" />
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                fontFamily: "Poppins",
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              AirBnbLike
            </p>
            <p
              style={{
                color: "#ffffff",
                padding: "0 20px 0 20px",
                fontFamily: "Poppins",
                marginBottom: "10px",
              }}
            >
              A Website where user can book premium Hotels and Rooms and also Post our Hotels to website and being Admin.
            </p>
            <div className="techStack" style={{ padding: "0 20px 0 20px" }}>
              <p style={{ fontFamily: "Poppins", color: "#ffffff" }}>
                Tech Stacks Used &nbsp;:&nbsp;&nbsp;{" "}
              </p>
              <SiMongodb
                style={{ fontSize: "22px", color: "#fe9401" }}
              />
              |&nbsp;
              <SiExpress style={{ fontSize: "22px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <IoLogoNodejs style={{ fontSize: "22px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <FaReact style={{ fontSize: "20px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <SiRedux style={{ fontSize: "20px", color: "#fe9401" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px 0 20px",
              marginTop: "25px",
            }}
          >
            <a
              href="https://deployment-of-air-bnb.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <MdLanguage style={{ fontSize: "20px" }} />
              </button>
            </a>{" "}
            <a
              href="https://github.com/amansingh456/airbnbLike"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }} >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <AiFillGithub style={{ fontSize: "20px" }} />
              </button>
            </a>
          </div>
        </div>
        <div className="project2" style={{ color: "#ffffff" }}>
          <img src={img2} alt="img1" />
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                fontFamily: "Poppins",
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Sprits-Villa
            </p>
            <p
              style={{
                color: "#ffffff",
                padding: "0 20px 0 20px",
                fontFamily: "Poppins",
                marginBottom: "10px",
              }}
            >
              Sprits Villa offer you the convenience of shopping for everything that you need for your home from a single virtual store.
            </p>
            <div className="techStack" style={{ padding: "0 20px 0 20px" }}>
              <p style={{ fontFamily: "Poppins", color: "#ffffff" }}>
                Tech Stacks Used &nbsp;:&nbsp;&nbsp;
              </p>
              <SiMongodb
                style={{ fontSize: "22px", color: "#fe9401" }}
              />
              |&nbsp;
              <SiExpress style={{ fontSize: "22px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <IoLogoNodejs style={{ fontSize: "22px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <FaReact style={{ fontSize: "20px", color: "#fe9401" }} />
              &nbsp;|&nbsp;
              <SiRedux style={{ fontSize: "20px", color: "#fe9401" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px 0 20px",
              marginTop: "25px",
            }}
          >
            <a
              href="https://natural-volcano-6886-sy8i.vercel.app"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <MdLanguage style={{ fontSize: "20px" }} />
              </button>
            </a>{" "}
            <a
              href="https://github.com/amansingh456/spirits-villa"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }} >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <AiFillGithub style={{ fontSize: "20px" }} />
              </button>
            </a>
          </div>
        </div>
        <div className="project1" style={{ color: "#ffffff" }}>
          <img src={img1} alt="img1" />
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                fontFamily: "Poppins",
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Cozy Movie App
            </p>
            <p
              style={{
                color: "#ffffff",
                padding: "0 20px 0 20px",
                fontFamily: "Poppins",
                marginBottom: "10px",
              }}
            >
              Simple Movie Website, users can feel a good touch about Searching data from API, Sorting, Filtering types of functionalities
            </p>
            <div className="techStack" style={{ padding: "0 20px 0 20px" }}>
              <p style={{ fontFamily: "Poppins", color: "#ffffff" }}>
                Tech Stacks Used &nbsp;:&nbsp;&nbsp;{" "}
              </p>{" "}
              <TbBrandJavascript
                style={{ fontSize: "22px", color: "#fe9401" }}
              />{" "}
              &nbsp;|&nbsp;{" "}
              <DiCss3 style={{ fontSize: "22px", color: "#fe9401" }} />{" "}
              &nbsp;|&nbsp;{" "}
              <DiHtml5 style={{ fontSize: "22px", color: "#fe9401" }} />{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px 0 20px",
              marginTop: "25px",
            }}
          >
            <a
              href="https://cozy-movie-app.netlify.app"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <MdLanguage style={{ fontSize: "20px" }} />
              </button>
            </a>
            <a
              href="https://github.com/amansingh456/Cozy-Movie-App"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }} >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <AiFillGithub style={{ fontSize: "20px" }} />
              </button>
            </a>
          </div>
        </div>
       
        <div className="project3" style={{ color: "#ffffff" }}>
          <img src={img3} alt="img1" />
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                fontFamily: "Poppins",
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Basic Music App
            </p>
            <p
              style={{
                color: "#ffffff",
                padding: "0 20px 0 20px",
                fontFamily: "Poppins",
                marginBottom: "10px",
              }}
            >
              A Simple Music Web-App, the user can listen to some music, can also do some functionality like Play, Pause, Next & Previous
            </p>
            <div className="techStack" style={{ padding: "0 20px 0 20px" }}>
              <p style={{ fontFamily: "Poppins", color: "#ffffff" }}>
                Tech Stacks Used &nbsp;:&nbsp;&nbsp;{" "}
              </p>{" "}
              <TbBrandJavascript
                style={{ fontSize: "25px", color: "#fe9401" }}
              />{" "}
              &nbsp;|&nbsp;{" "}
              <DiCss3 style={{ fontSize: "25px", color: "#fe9401" }} />{" "}
              &nbsp;|&nbsp;{" "}
              <DiHtml5 style={{ fontSize: "25px", color: "#fe9401" }} />{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px 0 20px",
              marginTop: "25px",
            }}
          >
            <a
              href="https://real-music-app.netlify.app"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <MdLanguage style={{ fontSize: "20px" }} />
              </button>
            </a>{" "}
            <a
              href="https://github.com/amansingh456/Simple-Music"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }} >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <AiFillGithub style={{ fontSize: "20px" }} />
              </button>
            </a>
          </div>
        </div>
        <div className="project4" style={{ color: "#ffffff" }}>
          <img src={img4} alt="img1" />
          <div>
            <p
              style={{
                color: "#ffffff",
                fontSize: "30px",
                margin: "10px 0 10px 0",
                fontFamily: "Poppins",
                textAlign: "center",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Fraudy
            </p>
            <p
              style={{
                color: "#ffffff",
                padding: "0 20px 0 20px",
                fontFamily: "Poppins",
                marginBottom: "10px",
              }}
            >
              Fraudy is Ecommerce site for the trending fashion accessories & online shop that offered high quality products at an good price.
            </p>
            <div className="techStack" style={{ padding: "0 20px 0 20px" }}>
              <p style={{ fontFamily: "Poppins", color: "#ffffff" }}>
                Tech Stacks Used &nbsp;:&nbsp;&nbsp;{" "}
              </p>{" "}
              <FaReact
                style={{ fontSize: "20px", color: "#fe9401" }}
              />{" "}
              &nbsp;|&nbsp;{" "}
              <SiRedux style={{ fontSize: "20px", color: "#fe9401" }} />{" "}
              &nbsp;|&nbsp;{" "}
              <SiFirebase style={{ fontSize: "20px", color: "#fe9401" }} />{" "}
              &nbsp;|&nbsp;{" "}
              <TbBrandJavascript style={{ fontSize: "22px", color: "#fe9401" }} />{" "}
              &nbsp;|&nbsp;{" "}
              <DiCss3 style={{ fontSize: "22px", color: "#fe9401" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px 0 20px",
              marginTop: "25px",
            }}
          >
            <a
              href="https://fraudy.vercel.app"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <MdLanguage style={{ fontSize: "20px" }} />
              </button>
            </a>{" "}
            <a
              href="https://github.com/amansingh456/Fraudy"
              target="_blank"
              rel="noreferrer"
              style={{ outline: "none", textDecoration: "none" }} >
              <button
                style={{
                  backgroundColor: "#fe9401",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <AiFillGithub style={{ fontSize: "20px" }} />
              </button>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Projects;
