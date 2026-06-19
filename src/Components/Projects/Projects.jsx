import React, { useState, useEffect } from "react";
import "./Projects.css";

import GameBoard from "../../assets/snake-and-ladder/GameBoard.png";
import LeaderBoard from "../../assets/snake-and-ladder/leader-board.png";
import MatchHistory from "../../assets/snake-and-ladder/match-history.png";
import Snake1 from "../../assets/snake-and-ladder/Snake1.png";
import Snake2 from "../../assets/snake-and-ladder/Snake2.png";
import Snake3 from "../../assets/snake-and-ladder/Snake3.png";
import Snake4 from "../../assets/snake-and-ladder/Snake4.png";

const snakeImages = [GameBoard, LeaderBoard, MatchHistory, Snake1, Snake2, Snake3, Snake4];

/* Two stacked images — crossfade by toggling which slot is "active" */
const CyclingImage = ({ images, alt }) => {
  const [slots, setSlots] = useState({ a: 0, b: 1, active: "a" });

  useEffect(() => {
    const timer = setInterval(() => {
      setSlots((prev) => {
        const inactive = prev.active === "a" ? "b" : "a";
        const nextIdx = (prev[prev.active] + 1) % images.length;
        return { ...prev, [inactive]: nextIdx, active: inactive };
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="cycling-wrap">
      <img
        src={images[slots.a]}
        alt={alt}
        className={`cycling-img ${slots.active === "a" ? "cycling-img--on" : "cycling-img--off"}`}
      />
      <img
        src={images[slots.b]}
        alt={alt}
        className={`cycling-img ${slots.active === "b" ? "cycling-img--on" : "cycling-img--off"}`}
      />
    </div>
  );
};

const projects = [
  {
    id: 7,
    title: "Snake & Ladder — Real-Time 3D Multiplayer Game",
    images: snakeImages,
    alt: "Snake & Ladder 3D Multiplayer Game",
    desc: "A real-time multiplayer Snake & Ladder game with a fully interactive 3D board. Create or join rooms, invite friends with a code, and compete live with up to 6 players — rolls, moves, and turns sync instantly. Sign in with Google, chat live inside matches, earn XP, rank up, and track your full match history on a global leaderboard. Includes solo bot mode, local multiplayer, and PWA offline support with sound effects.",
    tech: ["Next.js", "TypeScript", "Three.js", "Socket.io", "PostgreSQL", "Supabase", "Framer Motion", "Tailwind CSS", "PWA"],
    live: "https://snake-and-ladder-ynq8.onrender.com/",
    code: "https://github.com/ranjanpalai69/snake-and-ladder",
  },
  {
    id: 5,
    title: "ShopWatch",
    image: "https://i.ibb.co/wRWJ8y5/shopwatch-wallpaper.png",
    alt: "ShopWatch MERN e-commerce",
    desc: "A full-stack MERN e-commerce platform for buying watches. Features product catalog, cart management, user authentication with JWT, and a complete order workflow with secure checkout.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "CSS3"],
    live: "https://shopwatch-pearl.vercel.app/",
    code: "https://github.com/ranjanpalai69/shopwatch-mern",
  },
  {
    id: 6,
    title: "Forum App",
    image: "https://user-images.githubusercontent.com/112635764/232017763-ba8a239e-8455-4917-9231-7d5f5ce5d3ac.jpg",
    alt: "Forum social media app",
    desc: "A full-stack social forum platform where users participate in threaded discussions, share knowledge, and connect in a community-driven environment — built with MERN stack + Firebase for real-time features.",
    tech: ["React", "Redux", "TypeScript", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://forum-lake-chi.vercel.app/",
    code: "https://github.com/Vishwa9011/Forum_App",
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
                {proj.images ? (
                  <CyclingImage images={proj.images} alt={proj.alt} />
                ) : (
                  <img src={proj.image} alt={proj.alt} />
                )}
              </div>
              <div className="project_information">
                <h2>{proj.title}</h2>
                <p>{proj.desc}</p>
                <div className="project__chips">
                  {proj.tech.map((t) => (
                    <span key={t} className="project__chip">{t}</span>
                  ))}
                </div>
                <div className="project__actions">
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
