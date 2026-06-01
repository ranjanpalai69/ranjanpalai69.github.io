import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import resume from "../../assets/Ranjan-Palai-Resume.pdf";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setShowNavList(false);
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/19ZZO9lSOfHjEek31QVbsEDOIEq6sUep7/view?usp=sharing"
    );
  };

  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className={`nav__list ${showNavList ? "nav__list--open" : ""}`}
        >
          {[
            { label: "Home", id: "top" },
            { label: "About", id: "about" },
            { label: "Skills", id: "skills" },
            { label: "Client Work", id: "work-projects" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <li className="nav__list-item" key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className="link link--nav"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="nav__list-item">
            <a
              href={resume}
              onClick={openResume}
              className="link link--nav nav__resume-link"
              target="_blank"
              rel="noreferrer"
              download
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>

        <button
          type="button"
          onClick={() => setShowNavList((v) => !v)}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
