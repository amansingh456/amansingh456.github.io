import React from 'react';
import ReactGitHubCalendar from 'react-ts-github-calendar';
import { Theme } from "../Theme";
import ScrollAnimation from "react-animate-on-scroll";
import {RenderSectionHeading} from "../common/commonComponent";
import { Box } from '@material-ui/core';

const Calendar = () => {
    return (
        <>
            <Box style={{backgroundColor:Theme.colors.base1, padding:"0 15px", paddingBottom:"50px"}}>
                <ScrollAnimation animateIn='fadeIn'>
                    {RenderSectionHeading({
                        smallText: "Github Stats",
                        heading: "Calender",
                        // description:
                        //   "Got my Portfolio seen , than feel free to contact me for your future projects",
                    })}
                    <Box className='calendar' style={{color:"#ffffff"}}>
                        <ReactGitHubCalendar userName="amansingh456" responsive="true" style={{color:"#ffffff"}} />
                    </Box>
                </ScrollAnimation>    
            </Box>
        </>
    );
}

export default Calendar