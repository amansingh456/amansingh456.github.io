import React from 'react'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { RiMenu5Fill } from "react-icons/ri"
import pdf from "./Aman-Singh-Rajawat-Resume.pdf"
import "./Navbar.css"
import { Link } from 'react-scroll'


const Navbar = () => {

  return (
    <>
      <div className='navbarWrapper'>
        <div className='navLeft'>
          <a href="/#" className='navLeftLink'>
            <h1 className='logo'>Aman</h1>
          </a>
        </div>
        <div className='navRight'>
          <Link to="home" activeClass="active" smooth={true} offset={-70} duration={1000}>Home</Link>
          <Link to="about" activeClass="active" smooth={true} offset={-70} duration={1000}>About</Link>
          <Link to="project" activeClass="active" smooth={true} offset={-70} duration={600}>Projects</Link>
          <Link to="skills" activeClass="active" smooth={true} offset={-70} duration={1000}>Skills</Link>
          <Link to="contact" activeClass="active" smooth={true} offset={-70} duration={1000}>Contact</Link>
          <a href={pdf} download="fp06_252-Aman-Singh-Rajawat.pdf" onClick={()=>{window.open("https://drive.google.com/file/d/137MhCg2X815aTp-SMZnNuXC8uBbxLcyk/view?usp=sharing", "_blank")}}>Resume</a>
        </div>
        <div className='navRightSmall'>
          <Menu>
            <MenuButton
              className='MenuButton'
              as={IconButton}
              aria-label='Options'
              icon={<RiMenu5Fill />}
              variant='ghost'
            />
            <MenuList backgroundColor={"#2e2d2e"} className="MenuList">
              <MenuItem className='MenuItem'>
                <Link to="home" activeClass="active" smooth={true} offset={-70} duration={1000}>Home</Link>
              </MenuItem>
              <MenuItem className='MenuItem'>
                <Link to="about" activeClass="active" smooth={true} offset={-70} duration={1000}>About</Link>
              </MenuItem>
              <MenuItem className='MenuItem'>
                <Link to="project" activeClass="active" smooth={true} offset={-70} duration={600}>Projects</Link>
              </MenuItem>
              <MenuItem className='MenuItem'>
                <Link to="skills" activeClass="active" smooth={true} offset={-70} duration={1000}>Skills</Link>
              </MenuItem>
              <MenuItem className='MenuItem'>
                <Link to="contact" activeClass="active" smooth={true} offset={-70} duration={1000}>Contact</Link>
              </MenuItem>
              <MenuItem className='MenuItem' onClick={()=>{window.open("https://drive.google.com/file/d/137MhCg2X815aTp-SMZnNuXC8uBbxLcyk/view?usp=sharing", "_blank")}}>
                <a href={pdf} download="fp06_252-Aman-Singh-Rajawat.pdf">Resume</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  )
}

export default Navbar
