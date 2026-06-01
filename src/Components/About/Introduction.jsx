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
              Hyderabad. My recent work includes architecting the{" "}
              <span className="different">Noedra Design System</span> for{" "}
              <span className="different">Siemens Energy</span> (49+ Web
              Components in Lit 3), leading development of{" "}
              <span className="different">Lexibit</span> — an AI-powered OCR
              automation platform (Next.js 15 PWA + GPT-4o-mini + Zoho /
              QuickBooks integrations), and contributing to the{" "}
              <span className="different">Global Fintech Fest 2025</span>{" "}
              platform via Strapi CMS.
            </h4>
            <h4 style={{ marginTop: "0.8em" }}>
              I specialise in{" "}
              <span className="different">
                React.js, Next.js, TypeScript, Node.js
              </span>{" "}
              and{" "}
              <span className="different">
                AWS serverless architectures
              </span>
              , with experience in mobile development (
              <span className="different">React Native, Swift</span>) and
              enterprise tooling (Docker, Kubernetes, Playwright, Web
              Components).
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
