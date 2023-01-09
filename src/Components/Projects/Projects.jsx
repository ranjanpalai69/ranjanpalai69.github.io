import React from "react";
import "./Projects.css";
import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiChakraui,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,

  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiReduxsaga
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">


          {/* 1 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/63a38636972dd4001c0d0a78.png"
                    alt="ayoa.com"
                    style={{ height: "200px" }}
                   
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Looseit.com Clone</h2>
                <p>
                Lose It! is a calorie counter and food diary diet app that helps you stick to your diet and achieve weight loss that fits!
                </p>
                <div>
                  <FaHtml5 />
                  <SiCss3 />
                  <IoLogoJavascript />
                  
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://brilliant-moxie-01b056.netlify.app/landing%20page2.2/landing.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ranjanpalai69/looseit-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://vps46408.inmotionhosting.com/~forwar44/blog/wp-content/uploads/2022/02/50-off-on-nykaa-cosmatic-768x354.png"
                    alt="Lybrate.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Nykaa.com Clone</h2>
                <p>
                Nykaa is India's biggest lifestyle and fashion portal with a collection of cosmetics, skincare, haircare, fragrances, bath and body, personal care, and wellness products for both women and men..
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiChakraui />
                  <SiMaterialui />
                  <DiCss3/>
                  <IoLogoJavascript />
                 
                </div>
                <div>
                  <a
                    href="https://63ada1475ad13e35586e0a54--ornate-cupcake-fb26b5.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/arpitmiahra4/amazing-pocket-7061"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
