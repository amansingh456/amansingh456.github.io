import { Box, Container, Grid, Hidden, Tooltip, Link } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/contactus.jpg";
import { RenderSectionHeading } from "../common/commonComponent";
import ScrollAnimation from "react-animate-on-scroll";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

export default function Contact() {
  const classes = useStyles();
  

  return (
    <Box className={classes.sectionDark} id='Contact'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: " Contact Me",
                heading: "Seems To be Interesting",
                description:
                  "Got my Portfolio seen , than feel free to contact me for your future projects",
              })}
              <br />
              <Box style={{marginLeft:"10px"}}>
                <Link href="https://www.linkedin.com/in/aman690/" target="_blank">
                  <LinkedInIcon style={{marginRight:"10px" , color:"#fff", backgroundColor:"#e3a408", padding:"8px", borderRadius:"20px"}}/>
                </Link>
                <Link href="https://github.com/amansingh456" target="_blank">
                  <GitHubIcon style={{marginRight:"10px" , color:"#fff", backgroundColor:"#e3a408", padding:"8px", borderRadius:"20px"}}/>
                </Link>
                <Link href="mailto: amansinghrajawat690@gmail.com">
                  <Tooltip title="amansinghrajawat690@gmail.com">
                    <AlternateEmailIcon style={{marginRight:"10px", color:"#fff", backgroundColor:"#e3a408", padding:"8px", borderRadius:"20px"}}/>
                  </Tooltip>
                </Link>
                <Link href="tel: +917477215550">
                  <Tooltip title="+91 7477215550">
                    <PermPhoneMsgIcon style={{color:"#fff", backgroundColor:"#e3a408", padding:"8px", borderRadius:"20px"}}/>
                  </Tooltip>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
