
import React from 'react'
import Typed from "react-typed"
import {AiOutlineArrowDown} from "react-icons/ai"
import pdf from "./Aman-Singh-Rajawat-Resume.pdf"
import "./Home.css"

const Home = () => {
  return (
    
    <div className='homeWrapper' id='home'>
      
        <p className="typed">
          I'm a <span style={{ paddingRight: "15px" }}></span>
          <Typed
            style={{color:"#fe9401"}}
            strings={[" Web - Developer"]}
            typeSpeed={100}
            backSpeed={200}
            loop
          />
        </p>
        <p className='typedDesc'>
            I Create Websites,
            <br />
            Based On Your Needs...
        </p>
        <p className='resumeButton' style={{display:"inline-block"}} onClick={()=>{window.open("https://drive.google.com/file/d/137MhCg2X815aTp-SMZnNuXC8uBbxLcyk/view?usp=sharing", "_blank")}}>
            <a href={pdf} download="fp06_252-Aman-Singh-Rajawat.pdf">
                Resume <span style={{paddingLeft:"3px", marginTop:"5px"}}><AiOutlineArrowDown/></span>
            </a>
        </p>
        
    </div>
    
  )
}

export default Home
