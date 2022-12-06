import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-scroll";

export default function Footer() {
  const classes = useStyles();
  var date = new Date();
  return (
    <Box className={classes.footerContainer} id='Footer'>
      <IconButton
        className={classes.iconButton}
        to='Headder'
        activeClass='active'
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}>
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant='body1' component='h4' align='center' color='inherit'>
        Developed  by 
        <span style={{color:"#e2a308"}}> Aman Singh Rajawat</span> with <FavoriteIcon style={{ color: "#e2a308" }} /><span>, All Right Reserved © {date.getFullYear()}</span>
      </Typography>
    </Box>
  );
}
 