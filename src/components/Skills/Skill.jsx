import { Box } from '@chakra-ui/react'
import React from 'react'
import html from "./skillImg/html.png";
import css from "./skillImg/css.png";
import javascript from "./skillImg/javascript.png";
import reactImage from "./skillImg/react.png";
import redux from "./skillImg/redux.png"
import mui from "./skillImg/mui.png"
import chakra from "./skillImg/chakraui.png"
import node from "./skillImg/node.png"
import express from "./skillImg/express.png"
import mongo from "./skillImg/mongodb.png"
import TS from "./skillImg/typescript_original_logo_icon_146317.png"
import github from "./skillImg/github.png";
import npm from "./skillImg/npm-logo-red.png"
import notion from "./skillImg/notion-icon.png"
import vs from "./skillImg/visual-studio-code-icon.png"
import pm from "./skillImg/postman.png"
import mysql from "./skillImg/mysql.png"
import tailwind from "./skillImg/tailwind.png"
import prisma from "./skillImg/prisma.png"
import wb from "./skillImg/workbench.png"
import atlas from "./skillImg/atlasNew.png"
import mongoose from "./skillImg/icons8-mongoose-480.png"
import vercel from "./skillImg/vercel.png"
import render from "./skillImg/render.png"
import netlify from "./skillImg/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-96.png"
import Slide from 'react-reveal/Tada';
import "./Skills.css"

const Skill = () => {
  return (
    <>

      <div className='skillsWrapper' id='skills'> 
        <p>Skills</p>
        <Box className="techStacksBox">
          <Slide>
            <Box className="techStacks html" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={html} alt="Html" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>HTML</p>
            </Box>
            <Box className="techStacks css" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={css} alt="css" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>CSS</p>
            </Box>
            <Box className="techStacks js" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={javascript} alt="js" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>JavaScript</p>
            </Box>
            <Box className="techStacks ts" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={TS} alt="ts" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>TypeScript</p>
            </Box>
            <Box className="techStacks react" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={reactImage} alt="React" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>React</p>
            </Box>
            <Box className="techStacks redux" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={redux} alt="redux" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Redux</p>
            </Box>
            <Box className="techStacks chakra" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={chakra} alt="cui" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Chakra UI</p>
            </Box>
            <Box className="techStacks mui" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={mui} alt="mui" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Material UI</p>
            </Box>
            <Box className="techStacks cy" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={tailwind} alt="cy" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Tailwind CSS</p>
            </Box>
            
            <Box className="techStacks ex" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={express} alt="ex" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Express</p>
            </Box>
            <Box className="techStacks node" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={node} alt="ndoe" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Node</p>
            </Box>
            <Box className="techStacks mongoose" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={mongoose} alt="mongoose" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Mongoose</p>
            </Box>
            <Box className="techStacks mongo" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={mongo} alt="mongo" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>MongoDB</p>
            </Box>
            {/* <Box className="techStacks mysql" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={mysql} alt="mysql" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>MySQL</p>
            </Box> */}
            {/* <Box className="techStacks prisma" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={prisma} alt="prisma" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Prisma ORM</p>
            </Box> */}
            <Box className="techStacks npm" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={npm} alt="npm" style={{ paddingTop: "50px" }} />
              <p style={{ color: "#ffffff", marginBottom: "28px" }}>NPM</p>
            </Box>
          </Slide>
        </Box>
      </div>
      <div className='toolsWrapper'>
        <p>Tools</p>
        
          <Box className='techStacksBox'>
          <Slide>
            <Box className="techStacks vs" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={vs} alt="vs" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>VS Code</p>
            </Box>
            <Box className="techStacks notion" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={notion} alt="notion" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Notion</p>
            </Box>
            <Box className="techStacks git" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={github} alt="git" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Github</p>
            </Box>
            <Box className="techStacks pm" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={pm} alt="git" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Postman</p>
            </Box>
            <Box className="techStacks atlas" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={atlas} alt="git" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Atlas</p>
            </Box>
            {/* <Box className="techStacks wb" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={wb} alt="wb" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Workbench</p>
            </Box> */}
            <Box className="techStacks render" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={render} className='RENDER' alt="render" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Render</p>
            </Box>
            <Box className="techStacks vercel" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={vercel} alt="vercel" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Vercel</p>
            </Box>
            <Box className="techStacks netlify" id="upx" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={netlify} alt="netlify" style={{ paddingTop: "20px" }} />
              <p style={{ color: "#ffffff", marginBottom: "15px" }}>Netlify</p>
            </Box>
            </Slide>
          </Box>
        
      </div>

    </>
  )
}

export default Skill
