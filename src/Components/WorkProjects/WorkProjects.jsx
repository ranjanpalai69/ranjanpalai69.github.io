import React from "react";
import "./WorkProjects.css";
import seImg from "../../assets/SE-Web-componets.png";
import crawlerImg from "../../assets/Crawler.png";
import gffVideo from "../../assets/GFF-Tech.mp4";
import lexibitVideo from "../../assets/Lexibit.mp4";

const workProjects = [
  {
    id: 1,
    company: "Siemens Energy",
    title: "Noedra — Enterprise Design System",
    mediaType: "image",
    mediaSrc: seImg,
    mediaAlt: "Noedra Siemens Energy Design System",
    description:
      "Architected Noedra, a production-grade design system for Siemens Energy — delivering 49+ reusable, framework-agnostic Web Components using Lit 3, TypeScript, and Vite in a monorepo. Built a full design-token pipeline (Style Dictionary) generating CSS custom properties for light/dark themes, consumable in React, Vue, Angular, and vanilla JS. Shipped components as scoped npm packages with Storybook 8 for interactive documentation and visual regression testing.",
    tech: ["Lit 3", "TypeScript", "Web Components", "Vite", "Storybook 8", "Style Dictionary", "npm Workspaces", "Custom Elements API"],
    liveUrl: "https://693febb95de4306a701df8de-xonwmriiib.chromatic.com/",
    liveLabel: "View Storybook",
  },
  {
    id: 2,
    company: "Global Fintech Fest 2025",
    title: "GFF 2025 — Event Platform",
    mediaType: "video",
    mediaSrc: gffVideo,
    mediaAlt: "Global Fintech Fest 2025",
    description:
      "Contributed to the official Global Fintech Fest 2025 platform, working with senior developers on Strapi CMS to manage backend modules — Sessions, Events, Speakers, Hackathons, and Live Event Management. Delivered fast, controlled REST APIs leveraging Strapi's component-based architecture, ensuring high maintainability and rapid feature rollout at scale for India's largest fintech event.",
    tech: ["Strapi CMS", "Next.js", "Node.js", "REST API", "PostgreSQL", "TypeScript", "Component-based CMS"],
    liveUrl: "https://2025.globalfintechfest.com/",
    liveLabel: "Visit Live Site",
  },
  {
    id: 3,
    company: "Lexibit / Splitbit",
    title: "Lexibit — AI-Powered OCR Automation Platform",
    mediaType: "video",
    mediaSrc: lexibitVideo,
    mediaAlt: "Lexibit OCR Dashboard",
    description:
      "Led end-to-end development of Lexibit, a full-scale OCR automation platform with advanced text extraction, schema-driven validation, and configurable output field mapping — built as a Next.js 15 PWA. Integrated Zoho Books (SO/PO/Invoices), Google Sheets, Excel, and QuickBooks via secure OAuth 2.0. Features a visual workflow editor (XYFlow), AI assistant (GPT-4o-mini) for natural-language project control, ag-grid data tables, drag-drop upload, and real-time progress tracking.",
    tech: ["Next.js 15", "React 19", "TypeScript", "OpenAI GPT-4o-mini", "Zoho Books API", "Google Sheets API", "QuickBooks API", "OAuth 2.0", "XYFlow", "ag-grid", "Zustand", "TanStack Query", "PWA"],
    liveUrl: "https://lexibit.io/",
    liveLabel: "Visit Lexibit",
  },
  {
    id: 4,
    company: "SEO Intelligence / Splitbit",
    title: "Internal Linking Crawler — SEO Analysis Platform",
    mediaType: "image",
    mediaSrc: crawlerImg,
    mediaAlt: "Internal Linking Crawler Dashboard",
    description:
      "Built a distributed web crawler for large-scale internal link analysis (10,000+ pages) using Playwright + Lambda-compatible Chromium, deployed on AWS Lambda with 2 GB memory and 15-min timeout. Backend: Express, MongoDB, Bull/Redis job queue with Socket.IO for real-time WebSocket progress streaming. Frontend: Next.js 14 dashboard with paginated reports, full-text search, and session management. Integrated NLP (natural.js) for anchor text analysis and link suggestion engine.",
    tech: ["Node.js", "Playwright", "AWS Lambda", "Express", "MongoDB", "Socket.IO", "Bull / Redis", "Next.js 14", "TypeScript", "NLP (natural.js)", "Serverless Framework", "Docker"],
    liveUrl: "https://master.d1xw4nh5b6eh0j.amplifyapp.com/",
    liveLabel: "View Live Demo",
  },
];

export const WorkProjects = () => {
  return (
    <section className="section work-projects-section" id="work-projects">
      <h2 className="section__title different" data-aos="fade-right">
        Work Projects
      </h2>
      <p className="section__subtitle" data-aos="fade-up">
        Enterprise &amp; client work shipped in production — private repos, live products
      </p>
      <div style={{ textAlign: "center" }}>
        <span className="work-projects-badge" data-aos="fade-up">
          Professional &amp; Client Work
        </span>
      </div>
      <div className="work-grid">
        {workProjects.map((proj) => (
          <div className="work-card" key={proj.id} data-aos="fade-up">
            <div className="work-card__media">
              {proj.mediaType === "video" ? (
                <video
                  src={proj.mediaSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={proj.mediaAlt}
                />
              ) : (
                <img src={proj.mediaSrc} alt={proj.mediaAlt} />
              )}
              <span className="work-card__company-tag">{proj.company}</span>
            </div>
            <div className="work-card__body">
              <h3 className="work-card__title">{proj.title}</h3>
              <p className="work-card__desc">{proj.description}</p>
              <div className="work-card__tech">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="work-card__actions">
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="work-btn">
                  {proj.liveLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
