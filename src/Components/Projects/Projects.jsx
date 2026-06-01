import React from "react";
import "./Projects.css";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiChakraui,
  SiMaterialui,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiTypescript,
  SiJsonwebtokens,
} from "react-icons/si";
import { DiCss3, DiFirebase, DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const projects = [
  {
    id: 5,
    title: "ShopWatch",
    image: "https://i.ibb.co/wRWJ8y5/shopwatch-wallpaper.png",
    alt: "ShopWatch MERN e-commerce",
    desc: "A full-stack MERN e-commerce platform for buying watches. Features product catalog, cart management, user authentication with JWT, and a complete order workflow with secure checkout.",
    tech: [<FaReact />, <SiRedux />, <DiCss3 />, <FaNodeJs />, <SiExpress />, <SiMongodb />, <SiJsonwebtokens />],
    live: "https://shopwatch-pearl.vercel.app/",
    code: "https://github.com/ranjanpalai69/shopwatch-mern",
  },
  {
    id: 6,
    title: "Forum App",
    image: "https://user-images.githubusercontent.com/112635764/232017763-ba8a239e-8455-4917-9231-7d5f5ce5d3ac.jpg",
    alt: "Forum social media app",
    desc: "A full-stack social forum platform where users participate in threaded discussions, share knowledge, and connect in a community-driven environment — built with MERN stack + Firebase for real-time features.",
    tech: [<FaReact />, <SiRedux />, <SiTypescript />, <FaNodeJs />, <SiExpress />, <SiMongodb />, <DiFirebase />],
    live: "https://forum-lake-chi.vercel.app/",
    code: "https://github.com/Vishwa9011/Forum_App",
  },
  {
    id: 1,
    title: "Looseit.com Clone",
    image: "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/63a38636972dd4001c0d0a78.png",
    alt: "Looseit calorie tracker",
    desc: "A calorie counter and food diary app inspired by Lose It! — helps users stick to their diet and achieve weight loss goals by tracking daily food intake and nutrition.",
    tech: [<FaHtml5 />, <SiCss3 />, <IoLogoJavascript />, <SiBootstrap />],
    live: "https://coruscating-dango-4316fc.netlify.app",
    code: "https://github.com/ranjanpalai69/looseit-clone",
  },
  {
    id: 2,
    title: "Nykaa.com Clone",
    image: "https://vps46408.inmotionhosting.com/~forwar44/blog/wp-content/uploads/2022/02/50-off-on-nykaa-cosmatic-768x354.png",
    alt: "Nykaa e-commerce clone",
    desc: "Full-featured clone of India's largest beauty e-commerce platform — Nykaa. Includes product listings, filters, cart, wishlist, and a fully responsive UI.",
    tech: [<FaReact />, <SiRedux />, <SiChakraui />, <SiMaterialui />, <DiCss3 />, <IoLogoJavascript />],
    live: "https://63bfed597aacf001e8b9caf6--ornate-cupcake-fb26b5.netlify.app/",
    code: "https://github.com/arpitmiahra4/amazing-pocket-7061",
  },
  {
    id: 3,
    title: "NearBuy.com Clone",
    image: "https://moneymodels.org/wp-content/uploads/2020/08/nearbuy-homepage.png",
    alt: "NearBuy hyper-local commerce",
    desc: "India's first hyper-local online platform connecting customers with local merchants. Features location-based discovery, deals, and merchant profiles.",
    tech: [<FaReact />, <SiRedux />, <SiChakraui />, <SiMaterialui />, <DiCss3 />, <DiHtml5 />, <IoLogoJavascript />],
    live: "https://serene-rugelach-39c841.netlify.app/",
    code: "https://github.com/debasishbihari/lame-crayon-5872",
  },
  {
    id: 4,
    title: "Weather App",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh9HEb1mZQEJ3-czc7G0VwR8TDf8YH1TsSg&usqp=CAU",
    alt: "Weather App",
    desc: "A simple, clean weather lookup app built with vanilla HTML, CSS, and JavaScript — users get real-time weather data by entering any city name.",
    tech: [<DiHtml5 />, <DiCss3 />, <IoLogoJavascript />],
    live: "https://jolly-yeot-92ecf1.netlify.app/",
    code: "https://github.com/ranjanpalai69/Weather-Javascript",
  },
];

export const Projects = () => {
  return (
    <div className="section" id="projects">
      <h2 className="section__title different" data-aos="fade-right">
        Personal Projects
      </h2>
      <p className="section__subtitle" data-aos="fade-up">
        Open-source and learning projects that shaped my engineering foundations
      </p>
      <div className="allProjects">
        {projects.map((proj, i) => (
          <div
            className="projects_container"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={i * 60}
            key={proj.id}
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={proj.image} alt={proj.alt} style={{ height: "200px" }} />
                </div>
              </div>
              <div className="project_information">
                <h2>{proj.title}</h2>
                <p>{proj.desc}</p>
                <div>
                  {proj.tech.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
                <div>
                  <a href={proj.live} target="_blank" rel="noreferrer">
                    <span className="btns onbt">See this Live</span>
                  </a>
                  <a href={proj.code} target="_blank" rel="noreferrer">
                    <span className="btns onbt">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
