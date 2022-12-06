import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
// import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "Develop highly interactive User Interfaces ",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DashboardIcon />,
    },
    {
      title: "Building responsive website front end using ReactJS",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <ToysIcon />,
     },
    {
      title: " Creating application backend in Node, Express,",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <PermDeviceInformationIcon />,
    },
  
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about me'
                  className={classes.responsiveImg}
                  style={{width:"80%", borderRadius:"100%"}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "About me",
                heading: "Hello,👋 This is Aman Singh Rajawat",
                description:
                "A Full-Stack Web Developer trained by Masai School, Bengaluru. I have a passion to create useful projects and systems which can contribute in everyone's wellbeing. I go to full extent in execution.!",
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={12} key={i}>
                    {CardMedia({
                      label: item.title,
                      // Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
