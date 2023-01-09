import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiTailwindcss,

  SiChakraui,
  SiNextdotjs,
  SiExpress
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import {FaNpm} from "react-icons/fa";
import { SiJavascript,SiPostman,SiJest,SiTypescript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiTailwindcss />
            <h5>Tailwind Css</h5>
          </div>

          <div>
            <SiChakraui />
            <h5>Chakra Ui</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>NextJs</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>

          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>

          <div>
            <SiExpress />
            <h5>ExpressJs</h5>
          </div>


          <div>
            <FaGit />
            <h5>Git</h5>
          </div>


          <div>
            <SiJest />
            <h5>Jest</h5>
          </div>


          <div>
            <FaNpm />
            <h5>NPM</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
        </div>
      </div>
    </>
  );
};
