import React from "react";
import "../styles/exp.css";
import "../styles/Projects.css";
import { HiFolder } from "react-icons/hi";
import onmeta1 from "../Images/onmeta.png";
import onmeta2 from "../Images/onmeta-2.png";

const Exp = () => {
  return (
    <div className="Projects" id="exper">
      <div>
        <HiFolder color="#5fe4c9" fontSize={"25px"} />
        <h2>Experience</h2>
        <div></div>
      </div>
      <div className="exp-div">
        <div className="onmeta-img">
          <img src={onmeta1} alt="onmeta" />
          <img src={onmeta2} alt="onmeta2" />
        </div>
        <div className="onmeta-desc">
          <p
            style={{
              color: "#CCD6F6",
              fontWeight: 600,
              fontSize: "20px",
              textAlign: "left",
              marginLeft: "20px",
            }}
          >
            <a
              href="https://onmeta.in/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#CCD6F6",
                cursor: "pointer",
              }}
            >
              O N M E T A,
              <span
                style={{ color: "#8892B0", fontWeight: 100, fontSize: "18px" }}
              >
                &nbsp;Full Stack Developer{" "}
                <span
                  style={{
                    color: "#8892B0",
                    fontWeight: 50,
                    fontSize: "12px",
                  }}
                >
                  (Oct-2023 to Present)
                </span>
              </span>
            </a>
          </p>
          <p
            style={{
              color: "#8892B0",
              fontWeight: 200,
              fontSize: "13px",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "-15px",
            }}
          >
            - world no.1 quickest Onramp & Offramp solutions
          </p>
          <p
            style={{
              color: "#8892B0",
              fontWeight: 400,
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "40px",
              fontStyle: "italic",
              marginRight: "10px",
            }}
          >
            Task :
          </p>
          <p
            style={{
              color: "#CCD6F6",
              fontWeight: 400,
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "18px" }}>• </span>{" "}
            <span style={{ fontSize: "16px", fontWeight: 600 }}>Widget :</span>{" "}
            <span
              style={{ fontSize: "14px", fontWeight: 200, color: "#8892B0" }}
            >
              Streamlined widget interface and rectified functionality flaws,
              Leveraging Next.js, React, Redux, TypeScript, and JavaScript, I
              streamlined the interface, prioritizing efficiency and usability
            </span>
          </p>
          <p
            style={{
              color: "#CCD6F6",
              fontWeight: 400,
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "18px" }}>• </span>{" "}
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              Dashboard :
            </span>{" "}
            <span
              style={{ fontSize: "14px", fontWeight: 200, color: "#8892B0" }}
            >
              Initiated and executed internal dashboard development for enhanced
              internal services management
            </span>
          </p>
          <p
            style={{
              color: "#CCD6F6",
              fontWeight: 400,
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "18px" }}>• </span>{" "}
            <span style={{ fontSize: "16px", fontWeight: 600 }}>Backend :</span>{" "}
            <span
              style={{ fontSize: "14px", fontWeight: 200, color: "#8892B0" }}
            >
              {" "}
              Wrote payment services and implementing robust checks using Go
              lang, ensuring secure transactions and data integrity.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exp;