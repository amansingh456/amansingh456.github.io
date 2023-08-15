import { Box } from '@chakra-ui/react';
import React from 'react'
// import ReactGitHubCalendar from 'react-ts-github-calendar';
import GitHubCalendar from "react-github-calendar";
import "./Git.css"

const Git = () => {
    const explicitTheme = {
        dark: ['#383838', '#e6ba74', '#fe9401', '#ff6600', '#c25800']
        // light: ['#B36400', '#fe9401', '#f3b963', '#ffdba5', '#383838']
      };
    return (
        <>
            <div className='gitCalender'>
                <p className='calenders'>Git Calender</p>
                <Box className='callu' style={{ color: "#ffffff" }}>
                    <GitHubCalendar username="amansingh456" blockRadius={6} blockMargin={5} blockSize={15} colorScheme='dark' fontSize={16} theme={explicitTheme} weekStart={0}/>
                </Box>
                {/* <Box className='calendar callu' style={{ color: "#ffffff" }}>
                    <ReactGitHubCalendar global_stats={true} tooltips responsive userName="amansingh456" style={{ color: "#ffffff" }} />
                </Box> */}
                <p className='stats'>Git Stats</p>
                <Box style={{ display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "50px" }}>
                    {/* <img className='gitStats' src="https://github-readme-streak-stats.herokuapp.com?user=amansingh456&theme=dark&hide_border=false&border_radius=0&background=2e2d2e" alt="" /> */}
                    <img className='gitStats' src="https://github-readme-stats.vercel.app/api?username=amansingh456&show_icons=true&title_color=fe9401&text_color=ffffff&icon_color=fe9401&bg_color=2e2d2e&border_radius=0" alt="" />
                </Box>
            </div>
        </>
    )
}

export default Git
