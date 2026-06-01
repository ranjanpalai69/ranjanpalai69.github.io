import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Mar 2025 – Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Full-Stack Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Splitbit Innovative Solutions LLP, Hyderabad
            </h4>
            <p data-aos="fade-right">
              Led development of Lexibit — a full-scale AI-powered OCR automation platform (Next.js 15 PWA) integrating Zoho Books, Google Sheets, QuickBooks via OAuth 2.0, with a GPT-4o-mini chat layer for natural-language workflow control. Architected the Noedra design system (49+ Web Components) for Siemens Energy using Lit 3, TypeScript, and Storybook 8. Contributed to Global Fintech Fest 2025 via Strapi CMS and built a distributed SEO crawler on AWS Lambda with real-time Socket.IO streaming.
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Oct 2024 – Mar 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
               Rampwin Technologies Pvt Ltd, Jaipur, Rajasthan
            </h4>
            <p data-aos="fade-right">
              Enhanced a chat commerce platform by developing a coupon management module and integrating Salesforce APIs (OAuth, lead automation, triggered messaging). Resolved critical bugs to ensure system stability and collaborated with stakeholders on high-quality feature delivery.
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Nov 2023 - Oct 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Developer (Frontend)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
               Venturesathi Business Services LLP , Rourkela , Odisha
            </h4>
            <p data-aos="fade-right">
            I was responsible for developing and optimizing web applications, collaborating with cross-functional teams, and ensuring seamless project execution. I actively engaged with clients to gather requirements, analyze business objectives, and translate them into scalable technical solutions. Working within an Agile environment, I contributed to sprint planning, daily stand-ups, and iterative deliveries to ensure alignment with business goals. My key contributions include the development of a comprehensive ERP & HRMS system that streamlined business operations by automating purchasing, sales, and invoicing while integrating accounting functionalities with Tally. This solution enhanced operational efficiency, reduced paperwork by 70%, and improved user experience by 40%. I also developed an end-to-end HRMS module, automating recruitment, payroll, and attendance processes with role-based views, reducing HR workload by 80%.
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Aug 2022 - Aug 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Front-End Developer (React.Js)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
               ezTruck , Bhubaneswar , Odisha
            </h4>
            <p data-aos="fade-right">
            Worked closely with backend and design teams to develop an internal employee management dashboard and a real-time chat application. I participated in requirements analysis, UI development, and feature implementation, enhancing my skills in React.js, Redux, and MongoDB while gaining hands-on experience in Agile methodologies and collaborative development environments.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Mar 2022 - Aug 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Full Stack Development
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School (Remote)
            </h4>
            <p data-aos="fade-right">
              Military Styled Coding School, Where i learned about Full-Stack Web Developement, DS & Algorithms and Other Soft-Skills
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Aug 2019 - Jul 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              B.TECH (OCEM)
            </h3>
            <br />
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
               Oxford College Of Engineering & Management , Bhubaneswar
            </h4>
            <p data-aos="fade-right">
            CSE (2019-2023)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2019"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Higher Secondary - Science (PCMIT)
            </h3>
            <br />
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Godavarish Higher Secondary School , Banpur
            </h4>
            <p data-aos="fade-right">
              Passed with 67 Percentage.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
