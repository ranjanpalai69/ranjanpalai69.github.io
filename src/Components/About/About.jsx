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
import resume from "../../assets/Ranjan-Palai-Resume.pdf";
import Me from "../../assets/Ranjan-Palai.jpeg";
import { Instagram as InstagramIcon, WhatsApp } from "@material-ui/icons";

export const openNew = () => {
  window.open(
    "https://drive.google.com/file/d/19ZZO9lSOfHjEek31QVbsEDOIEq6sUep7/view?usp=sharing"
  );
};

export const About = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <div className="hero" itemScope itemType="https://schema.org/Person">
        {/* Left */}
        <div className="hero__left" data-aos="fade-right">
          <p className="hero__greeting" data-aos="fade-right" data-aos-delay="0">
            Hi there, I'm
          </p>

          <h1
            className="hero__name"
            data-aos="fade-right"
            data-aos-delay="80"
            itemProp="name"
          >
            Ranjan Palai
          </h1>

          <div className="hero__typewriter" data-aos="fade-right" data-aos-delay="160">
            <Type />
          </div>

          <div className="hero__meta" data-aos="fade-right" data-aos-delay="240">
            <span className="hero__tag">
              <span role="img" aria-label="location">📍</span> Bheteswar, Odisha
            </span>
            <span className="hero__tag">3+ Yrs Experience</span>
            <span className="hero__tag hero__tag--available">Available for Work</span>
          </div>

          <p className="hero__desc" data-aos="fade-right" data-aos-delay="300" itemProp="description">
            Full-Stack Software Engineer building enterprise design systems,
            AI-powered platforms, and AWS serverless architectures. Currently
            engineering at{" "}
            <strong itemProp="worksFor">Splitbit Innovative Solutions</strong>,
            Hyderabad — previously contributed to{" "}
            <strong>Siemens Energy</strong> (Noedra Web Components) and{" "}
            <strong>Global Fintech Fest 2025</strong>.
          </p>

          <div className="hero__social" data-aos="fade-right" data-aos-delay="360">
            {[
              { href: "https://github.com/ranjanpalai69",         label: "GitHub",    icon: <GitHubIcon />,    cls: "gh"       },
              { href: "https://www.linkedin.com/in/ranjan-palai19/", label: "LinkedIn", icon: <LinkedInIcon />, cls: "li"       },
              { href: "mailto:palairanjan2002@gmail.com",         label: "Email",     icon: <EmailIcon />,    cls: "email"    },
              { href: "tel:+918144630220",                         label: "Call",      icon: <PhoneIcon />,    cls: "phone"    },
              { href: "https://wa.me/918144630220?text=Hi Ranjan, I came across your portfolio!", label: "WhatsApp", icon: <WhatsApp />, cls: "wa" },
              { href: "https://twitter.com/RANJANPALAI141",        label: "Twitter",   icon: <TwitterIcon />,  cls: "tw"       },
              { href: "https://www.instagram.com/ranjan_palai19/", label: "Instagram", icon: <InstagramIcon />, cls: "ig"      },
            ].map(({ href, label, icon, cls }, i) => (
              <a
                key={cls}
                href={href}
                aria-label={label}
                target={href.startsWith("tel") ? "_self" : "_blank"}
                rel="noreferrer"
                className={`hero__social-link hero__social-link--${cls}`}
                data-tooltip={label}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="hero__actions" data-aos="fade-right" data-aos-delay="420">
            <a
              href={resume}
              download
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--primary"
              onClick={openNew}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="hero__btn hero__btn--outline"
              onClick={scrollToContact}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right — profile photo */}
        <div className="hero__right" data-aos="fade-left" data-aos-delay="200">
          <div className="hero__photo-ring">
            <img
              src={Me}
              alt="Ranjan Palai — Full-Stack Software Engineer from Bheteswar, Odisha"
              itemProp="image"
            />
          </div>
        </div>
      </div>

      <Introduction />
      <Timeline />
      <section id="skills">
        <Techstacks />
      </section>
      <SocialLinks />
    </>
  );
};
