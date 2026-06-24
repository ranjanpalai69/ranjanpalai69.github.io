import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="about">
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>
        <div className={"introduction " + themename}>
          <div className="introduction_logocontainer">
            <img
              src="https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?t=st=1737875987~exp=1737879587~hmac=4ce0c1418c827c91f2056c3cffe7ed4e8df1ee3b530dae1861aa6f83637418a9&w=740"
              alt="Ranjan Palai - Full-Stack Software Engineer from Odisha"
            />
          </div>
          <div className="introduction_datacontainer">
            <h4>
              Hi! I am{" "}
              <span className="different">Ranjan Palai</span>, a Full-Stack
              Software Engineer from{" "}
              <span className="different">Bheteswar, Odisha (India)</span>.
            </h4>
            <h4 style={{ marginTop: "0.8em" }}>
              I am a <span className="different">B.Tech (CSE)</span> graduate
              currently building production-grade software at{" "}
              <span className="different">Splitbit Innovative Solutions</span>,
              Hyderabad. My work spans enterprise design systems, AI-powered
              platforms, real-time applications, and serverless cloud
              architectures — including the{" "}
              <span className="different">Noedra Design System</span> for{" "}
              <span className="different">Siemens Energy</span> (49+ Web
              Components), <span className="different">Lexibit</span> (AI OCR
              automation platform), the{" "}
              <span className="different">Global Fintech Fest 2025</span>{" "}
              platform, and a fully serverless{" "}
              <span className="different">SEO Intelligence</span> system on AWS.
            </h4>
            <h4 style={{ marginTop: "0.8em" }}>
              I have hands-on experience building{" "}
              <span className="different">real-time systems</span> with{" "}
              <span className="different">Socket.io</span> — including live
              messaging with typing indicators and read receipts,{" "}
              <span className="different">WebRTC</span> peer-to-peer audio/video
              calling, presence tracking, and{" "}
              <span className="different">Web Push notifications</span> (VAPID)
              for backgrounded browsers. I also built{" "}
              <span className="different">Nexus</span>, a full-stack social
              media platform with stories, DMs, calling, and PWA support.
            </h4>
            <h4 style={{ marginTop: "0.8em" }}>
              I am a <span className="different">true full-stack developer</span>{" "}
              who picks up new technologies fast — whether it's a new framework,
              cloud service, or tool, I adapt quickly and ship confidently. My
              stack covers{" "}
              <span className="different">
                React.js, Next.js, TypeScript, Node.js, AWS Lambda, Docker
              </span>
              , and everything in between.
            </h4>
            <h4 style={{ marginTop: "1em" }}>When I'm not coding:</h4>
            <h4 className="different">
              <span className="icons">
                <ExitToAppIcon />
              </span>
              Playing Outdoor Games
            </h4>
            <h4 className="different">
              <span className="icons">
                <ExitToAppIcon />
              </span>
              Travelling
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
