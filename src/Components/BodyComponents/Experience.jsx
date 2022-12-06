import React from "react";
import { Box } from "@material-ui/core";
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

import github from "../../images/github.png";

import "../../index.css"
import {RenderSectionHeading} from "../common/commonComponent";
import { Theme } from "../Theme";
import ScrollAnimation from "react-animate-on-scroll";
// import GitHubCalendar from 'react-github-calendar';

const Experience = () => {
 
 
  return(
    <>
      <Box style={{backgroundColor:Theme.colors.base1, padding:"0 15px", paddingBottom:"50px"}}>
        <ScrollAnimation animateIn='fadeIn'>
          {RenderSectionHeading({
          smallText: "Tech Stacks",
          heading: "These are the technologies I've worked with",
          // description:
          //   "Got my Portfolio seen , than feel free to contact me for your future projects",
        })}
          <Box className="techStacksBox">
            <Box className="techStacks html" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={html} alt="Html" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>HTML</p>
            </Box>
            <Box className="techStacks css" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={css} alt="css" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>CSS</p>
            </Box>
            <Box className="techStacks js" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={javascript} alt="js" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>JavaScript</p>
            </Box>
            <Box className="techStacks react" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={reactImage} alt="React" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>React</p>
            </Box>
            <Box className="techStacks redux" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={redux} alt="redux" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>Redux</p>
            </Box>
            <Box className="techStacks mui" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={mui} alt="mui" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>Material UI</p>
            </Box>
            <Box className="techStacks chakra" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={chakra} alt="cui" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>Chakra UI</p>
            </Box>
            <Box className="techStacks node" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={node} alt="ndoe" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>Node</p>
            </Box><Box className="techStacks ex" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={express} alt="ex" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>Express</p>
            </Box><Box className="techStacks mongo" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={mongo} alt="mongo" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>MongoDB</p>
            </Box><Box className="techStacks git" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
              <img src={github} alt="git" style={{paddingTop:"20px"}} />
              <p style={{color:"#ffffff"}}>Github</p>
            </Box>
          </Box>
          <Box>
            {/* <GitHubCalendar username="amansingh456" /> */}
          </Box>
        </ScrollAnimation>
      </Box>
    </>

  ) ;
};

export default Experience;



