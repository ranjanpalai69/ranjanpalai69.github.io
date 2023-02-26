import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import SocialLinks from "./SocialLinks";
import resume from "../../assets/Ranjan-Palai-Resume.pdf"

const openNew=()=>{
  window.open("https://drive.google.com/file/d/1UtxxK7TwmZPjRIDb9zk2S7D4WI8tMj-3/view?usp=share_link");
}

export const About = () => {
  return (
    <>
      <div className="about center ">
        <div>
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Ranjan Palai</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        An enthusiastic full-stack web developer with in-depth experience in implementing diverse tech stacks . A highly flexible team player who is passionate about building user-focused products .
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/ranjanpalai69"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:palairanjan2002@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918144630220"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ranjan-palai19/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/RANJANPALAI141"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <a 
      href= {resume}
      
      download={true}
      
      className="link link--nav"
      target="_blank"
      style={{textDecoration:"none"}}
      onClick={openNew}

      >
      <button
          className="btnResume"
        
        >
          Resume
        </button>
       
        
      </a>
        </div>
        <div className="About_logocontainer">
              <img src="https://avatars.githubusercontent.com/u/107481896?s=400&u=056d9b468f39b8400a039e3e5afcd8439037075f&v=4" alt="profile" />
            </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />

      </section>
      <SocialLinks />

    </>
  );
};
