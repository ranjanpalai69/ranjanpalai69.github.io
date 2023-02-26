import React from "react";
import "../Projects/Projects.css";

export const Stat = () => {
  return (
    <>
      <div className="section">
      
        <div className="allProjects">
         
          <div className="projects_container" data-aos="fade-right">
            <div className="project_videocontainer">
              <div>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=ranjanpalai69&hide_border=true&theme=react&hide_border=true&bg_color=0D1117" alt="stat" />
              </div>
            </div>

          </div>
          

          <div className="projects_container" data-aos="fade-right">
            <div className="project_videocontainer">
              <div>
              <img src="https://github-readme-stats.vercel.app/api?username=ranjanpalai69&show_icons=true&theme=radical" alt="stats" />
              
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};