import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import useReady from "./Context/useReady";
import LoadingPage from "./Components/About/Loading";
import Contact from "./Components/Contact/Contact";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const {ready}=useReady(2000)
  return (
    <div >
     {
      ready!==true?<LoadingPage/>:
      <div id="top" className={`${themename} app`}>
         <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      
        </div>
     }
    </div>
  );
}
