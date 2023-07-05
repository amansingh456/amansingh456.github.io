import { Box } from '@chakra-ui/react'
import React from 'react'

import "./Footer.css"


const Footer = () => {
    let date = new Date()
    return (
        <>
           
           <Box className="footerWraaper" id='Footer'>
               
                <p>
                    Designed  by
                    <span style={{ color: "#fe9401" }}><b><i> Aman Singh Rajawat  </i></b></span>, &nbsp; All Right Reserved © {date.getFullYear()}
                </p>
            </Box>
          
        </>
    )
}

export default Footer
