import React from "react";
import GitHubCalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";
import "./Github.css";

export const Github = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  // v3 ThemeInput format: { light: [l0,l1,l2,l3,l4], dark: [d0,d1,d2,d3,d4] }
  const theme = {
    light: ["#f3e8ff", "#f472b6", "#ec4899", "#db2777", "#9d174d"],
    dark:  ["#161b22", "#8b5cf6", "#7c3aed", "#6d28d9", "#4c1d95"],
  };

  return (
    <div className="section github-section" data-aos="fade-up">
      <h2 className="section__title">
        Days I <span className="different">Code</span>
      </h2>
      <p className="github-note" data-aos="fade-up" data-aos-delay="100">
        Consistently active since 2022 — to see{" "}
        <span className="different">private organisation contributions</span>,
        enable &nbsp;
        <strong>
          GitHub → Settings → Profile → &ldquo;Include private contributions&rdquo;
        </strong>
        .
      </p>
      <div
        className="github-calendar-wrapper"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <GitHubCalendar
          username="ranjanpalai69"
          theme={theme}
          colorScheme={themename === "dark" ? "dark" : "light"}
          blockSize={15}
          blockMargin={4}
          fontSize={13}
          showWeekdayLabels
        />
      </div>
    </div>
  );
};
