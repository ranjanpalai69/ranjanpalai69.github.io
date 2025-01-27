import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src="https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?t=st=1737875987~exp=1737879587~hmac=4ce0c1418c827c91f2056c3cffe7ed4e8df1ee3b530dae1861aa6f83637418a9&w=740" alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Ranjan Palai </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Khordha , Odisha (India) . &nbsp; 
                </span>
                
 I am a <span className="different">B.Tech</span> graduate in <span className="different">Computer Science and Engineering</span> with strong proficiency in web and mobile application development, specializing in <span className="different">React.js</span>,<span className="different">Next.Js</span> ,<span className="different"> TypeScript</span>, and <span className="different">Node.js</span>, along with experience in building <span className="different">Android and iOS</span> applications using <span className="different">React Native and Swift</span>. I excel in delivering scalable solutions while collaborating effectively within cross-functional teams. My commitment to continuous learning and my collaborative nature make me a valuable asset in dynamic development environments.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Outdoor Games{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
