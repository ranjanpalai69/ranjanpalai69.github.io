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
                  Khordha , Odisha (India)
                </span>
                . Currently I am pursuing my graduation  (B.TECH)
                from{" "}
                <span className="different">
                Oxford College Of Engineering & Management (OCEM) , BBSR 
                 </span>
                 . Now I have enrolled in a full-time full stack web development course by{" "}
                <span className="different">Masai School</span>  a military type
                coding school..
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
