import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Software Engineer",
          "Web Components Architect",
          "AI Platform Builder",
          "React & Next.js Specialist",
          "AWS Serverless Developer",
          "Team Player & Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  );
};
