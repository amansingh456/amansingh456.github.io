import React from 'react';
import ReactGitHubCalendar from 'react-ts-github-calendar';
import { Theme } from "../Theme";
import ScrollAnimation from "react-animate-on-scroll";
import { RenderSectionHeading } from "../common/commonComponent";
import { Box, Grid } from '@material-ui/core';

const Calendar = () => {
    return (
        <>
            <Box style={{ backgroundColor: Theme.colors.base1, padding: "0 15px", paddingBottom: "50px", paddingTop: "50px" }}>
                <ScrollAnimation animateIn='fadeIn'>
                    <Grid
                        container
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                        }}>
                        {RenderSectionHeading({
                            smallText: "Github",
                            heading: "",
                            alignCenter:true,
                            // description:
                            //   "Got my Portfolio seen , than feel free to contact me for your future projects",
                        })}
                        </Grid>
                        <Box className='calendar' style={{ color: "#ffffff" }}>
                            <ReactGitHubCalendar userName="amansingh456" responsive="true" style={{ color: "#ffffff" }} />
                        </Box>
                </ScrollAnimation>
            </Box>
        </>
    );
}

export default Calendar