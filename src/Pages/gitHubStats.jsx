import React from "react";
import { BiStats } from "react-icons/bi";
import "../styles/github.css";
export const GitHubStreak = () => {
  return (
    <div className="gitCalendar">
      <div>
        <BiStats color="#5fe4c9" fontSize={"25px"} />
        <h2>Git Streak</h2>
        <div></div>
      </div>
      <div>
        <div>
          <img
            className="gitStats"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=amansingh456&theme=transparent&title_color=5fe4c9&icon_color=CCD6F6&text_color=8892B0"
            alt="git stats"
          />
        </div>
      </div>
    </div>
  );
};
