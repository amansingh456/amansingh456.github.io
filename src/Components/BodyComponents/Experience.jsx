import React from "react";
import { Box, Grid } from "@material-ui/core";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javascript from "../../images/javascript.png";
import reactImage from "../../images/react.png";
import redux from "../../images/redux.png"
import mui from "../../images/mui.png"
import chakra from "../../images/chakraui.png"
import node from "../../images/node.png"
import express from "../../images/express.png"
import mongo from "../../images/mongodb.png"
import TS from "../../images/typescript_original_logo_icon_146317.png"
import github from "../../images/github.png";
import cy from "../../images/cypress.png"
import npm from "../../images/npm-logo-red.png"
import notion from "../../images/notion-icon.png"
import vs from "../../images/visual-studio-code-icon.png"
import "../../index.css"
import { RenderSectionHeading } from "../common/commonComponent";
import { Theme } from "../Theme";
import ScrollAnimation from "react-animate-on-scroll";

// import GitHubCalendar from 'react-github-calendar';

const Experience = () => {


  return (
    <>
      <Box style={{ backgroundColor: Theme.colors.base1, padding: "0 15px", paddingBottom: "50px", paddingTop:"50px" }}>
        <ScrollAnimation animateIn='fadeIn'>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}>
            {RenderSectionHeading({
              smallText: "Skills",
              heading: "",
              alignCenter:true,
              // description:
              //   "Got my Portfolio seen , than feel free to contact me for your future projects",
            })}
            </Grid>
            <Box className="techStacksBox">
              <Box className="techStacks html" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={html} alt="Html" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>HTML</p>
              </Box>
              <Box className="techStacks css" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={css} alt="css" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>CSS</p>
              </Box>
              <Box className="techStacks js" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={javascript} alt="js" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>JavaScript</p>
              </Box>
              <Box className="techStacks ts" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={TS} alt="ts" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>TypeScript</p>
              </Box>
              <Box className="techStacks react" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={reactImage} alt="React" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>React</p>
              </Box>
              <Box className="techStacks redux" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={redux} alt="redux" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Redux</p>
              </Box>
              <Box className="techStacks chakra" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={chakra} alt="cui" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Chakra UI</p>
              </Box>
              <Box className="techStacks mui" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={mui} alt="mui" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Material UI</p>
              </Box>
              <Box className="techStacks node" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={node} alt="ndoe" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Node</p>
              </Box>
              <Box className="techStacks ex" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={express} alt="ex" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Express</p>
              </Box>
              <Box className="techStacks mongo" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={mongo} alt="mongo" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>MongoDB</p>
              </Box>
              <Box className="techStacks cy" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={cy} alt="cy" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Cypress</p>
              </Box>
              <Box className="techStacks npm" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={npm} alt="npm" style={{ paddingTop: "50px" }} />
                <p style={{ color: "#ffffff" }}>NPM</p>
              </Box>
              <Box className="techStacks git" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={github} alt="git" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Github</p>
              </Box>
              <Box className="techStacks notion" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={notion} alt="notion" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>Notion</p>
              </Box>
              <Box className="techStacks vs" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={vs} alt="vs" style={{ paddingTop: "20px" }} />
                <p style={{ color: "#ffffff" }}>VS Code</p>
              </Box>
            </Box>

        </ScrollAnimation>
      </Box>
    </>

  );
};

export default Experience;



