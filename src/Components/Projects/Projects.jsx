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
import { DiCss3, DiHtml5 } from "react-icons/di";
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
                    alt="looseit"
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
                    href="https://coruscating-dango-4316fc.netlify.app"
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
                    alt="Nykaa"
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
                    href="https://63bfed597aacf001e8b9caf6--ornate-cupcake-fb26b5.netlify.app/"
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
          {/* 3rd project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://moneymodels.org/wp-content/uploads/2020/08/nearbuy-homepage.png"
                    alt="NearBuy"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>NearBuy.com Clone</h2>
                <p>
                (Nearbuy India Private Limited) is India’s first hyper-local online platform that enables customers and local merchants to discover and engage with each other.
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiChakraui />
                  <SiMaterialui />
                  <DiCss3/>
                  <DiHtml5/>
                  <IoLogoJavascript />
                  
                </div>
                <div>
                  <a
                    href="https://beautiful-kitten-367e3e.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/debasishbihari/lame-crayon-5872"
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
          {/* 4th project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh9HEb1mZQEJ3-czc7G0VwR8TDf8YH1TsSg&usqp=CAU"
                    alt="Weather App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
               A Simple Weather App made up with only HTML,CSS,JS . Where user can get the weather details by putting his/her location
                </p>
                <div>
                  <DiHtml5/>
                  <DiCss3/>
                  <IoLogoJavascript />
                 
                </div>
                <div>
                  <a
                    href="https://jolly-yeot-92ecf1.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ranjanpalai69/Weather-Javascript"
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
