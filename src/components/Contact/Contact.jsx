import React from 'react'
import contact from "./contactus.jpg"
import "./Contact.css"
import Wobble from 'react-reveal/Wobble';
import { MdMarkEmailUnread } from "react-icons/md"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { BsFillTelephoneForwardFill } from "react-icons/bs"

import { Box } from '@chakra-ui/react'


const Contact = () => {
    return (
        <div className='contactWrapper' id='contact'>
            <div className='contactBox'>
                <Wobble>
                    <div className='contactLeft'>
                        <img src={contact} alt="contact" />
                    </div>
                    <div className='contactRight'>
                        <p>Contact</p> <br />
                        <span>Got my Portfolio seen , than feel free to connect me.</span>
                        <div>
                            <Box className="num">
                                +91 7477215550
                            </Box>
                            <Box className="email">
                                amansinghrajawat750@gmail.com
                            </Box>
                            <Box className="icons">
                                <a href="https://www.linkedin.com/in/aman690/" target="_blank" rel="noreferrer">
                                    <AiFillLinkedin style={{ fontSize: "40px", marginRight: "30px", color: "#ffffff", backgroundColor: "#fe9401", padding: "5px", borderRadius: "20px" }} />
                                </a>
                                <a href="https://github.com/amansingh456" target="_blank" rel="noreferrer">
                                    <AiFillGithub style={{ fontSize: "40px", marginRight: "30px", color: "#ffffff", backgroundColor: "#fe9401", padding: "5px", borderRadius: "20px" }} />
                                </a>
                                <a href="mailto:amansinghrajawat750@gmail.com" >

                                    <MdMarkEmailUnread style={{ fontSize: "40px", marginRight: "30px", color: "#ffffff", backgroundColor: "#fe9401", padding: "5px", borderRadius: "20px" }} />

                                </a>
                                <a href="tel: +917477215550" >

                                    <BsFillTelephoneForwardFill style={{ fontSize: "40px", color: "#ffffff", backgroundColor: "#fe9401", padding: "5px", borderRadius: "20px" }} />

                                </a>
                            </Box>
                        </div>
                    </div>
                </Wobble>
            </div>
        </div>
    )
}

export default Contact
