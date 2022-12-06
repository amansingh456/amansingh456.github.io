import { Box, Button, Container, Grid, Typography, Link } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/med-x drug (1).jpg";
import image2 from "../../images/movie-app.jpg";
import image3 from "../../images/Todo App (1).jpg";
import image4 from "../../images/Music App.jpg";
import image5 from "../../images/dot&key-clone.jpg";
import image6 from "../../images/Restaurent Template.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image2, title: "# Cozy Movie App ",  about: "Simple Movie Website, user can seacrh movie and do Sorting and filteration also",techs:"JavaScript | HTML | CSS", link1: "https://cozy-movie-app.netlify.app", link2:"https://github.com/amansingh456/eminent-art-8078" },
    { url: image1, title: "# Med-X Drug ", about: "Med-x Drug is an e-commerce pharma website, user can buy all health related product",techs:"React | Redux | JavaScript", link1: "https://med-x-drug.netlify.app", link2:"https://github.com/amansingh456/eminent-art-8078"},
    { url: image4, title: "# Basic Music App ",  about: "A Simple Music Web-App where user can listen some music, can also do some functionality like Play, Pause, Next & Previous ",techs:"JavaScript | HTML | CSS", link1: "https://real-music-app.netlify.app", link2:"https://github.com/amansingh456/personalGitFiles/tree/main/Self/JS-projects/music_player" },
    { url: image3, title: "# Basic Todo App ",  about: "Basic Todo Web-App, user can feel a good touch of Todo App and a good UI ",techs:"React | JavaScript | CSS | HTML", link1: "https://react-cozy-keep.netlify.app", link2:"https://github.com/amansingh456/cozy-kepp-react-todo" },
    { url: image5, title: "# Dot & Key Clone ",  about: "Am E-commerce website cloned of Dot & Key, where user can but all skin related products",techs:"HTML | CSS | JavaScript", link1: "https://dot-and-key-ecommerce.netlify.app", link2:"https://github.com/amansingh456/radioactive-geese-7505" },
    { url: image6, title: "# Restaurent Template ",  about: "A Template of Restaurent website, where user can take a look how restaurent website looks",techs:"HTML | CSS", link1: "https://resto-template.netlify.app", link2:"https://github.com/amansingh456/personalGitFiles/tree/main/Self/CssProjects/Food" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>
                   <span className="smallSizeHidden">
                      <p style={{marginLeft:"10px", marginRight:"10px" }}>{item.about}</p>
                      <p style={{marginLeft:"10px", marginBottom:"30px"}}><span style={{fontSize:"18px"}}>Tech Stack Used:</span> <span style={{fontWeight:"600",color:"#2e2d2e"}}>{item.techs}</span></p>
                   </span>
                    <Box style={{display:"flex", justifyContent:"space-between", width:"90%"}}>
                      <Link href={item.link1} target="_blank">
                        <Button variant='contained'><LanguageIcon/></Button>
                      </Link>
                      <Link href={item.link2} target="_blank">
                        <Button variant='contained'><GitHubIcon/></Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
