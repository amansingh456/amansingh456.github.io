import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Link } from "react-scroll";
import { Theme } from "../Theme";
import "../../index.css"

export default function Navbar({ navlinks, handleDrawerToogler }) {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar
        className={classes.ToolBar}
        style={{ backgroundColor: Theme.colors.base1 }}>
        <a href="/" style={{color:"#ffffff", textDecoration:"none"}}>
          <Typography variant='h5' component='h6' className="Logo">
            {"Aman"}
          </Typography>
        </a>

        {/* navlinks  */}
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button
                key={i}
                className={classes.navlinks}
                to={`${item.Id}`}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
                color='inherit'>
                {item.label}
              </Button>
              
            ))}
            <a href="https://drive.google.com/file/d/137MhCg2X815aTp-SMZnNuXC8uBbxLcyk/view?usp=sharing" rel="noreferrer"  target="_blank" style={{color:"#ffffff", textDecoration:"none", marginLeft:"5px"}}>RESUME</a>
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color='inherit' onClick={handleDrawerToogler}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
