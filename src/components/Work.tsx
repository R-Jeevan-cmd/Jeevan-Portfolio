import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const baseURL = import.meta.env.BASE_URL ?? "/";

const projects = [
  {
    title: "AI Candidate Ranking System",
    category: "LLM-powered Resume Ranking",
    tools:
      "Python, Llama 3.1, Groq API, PDF Parsing, JSONL, Streamlit, GitHub",
    description:
      "An AI-powered candidate ranking system that analyzes resumes against job descriptions, extracts skills and experience, and ranks candidates using semantic matching and rule-based scoring.",
    image: `${baseURL}images/ai-candidate-ranking.png`,
  },
  {
    title: "Sales Forecasting Dashboard",
    category: "Time Series Forecasting",
    tools:
      "Python, Streamlit, Prophet, SARIMA, XGBoost, Pandas, Plotly",
    description:
      "An interactive dashboard for forecasting future sales using multiple time-series models with model comparison, performance metrics, and business insights.",
    image: `${baseURL}images/sales-forecasting.png`,
  },
  {
    title: "Skin Cancer Detection using Federated Learning & Blockchain ",
    category: "Federated Learning & Blockchain",
    tools: "Python, federated learning, blockchain, privacy-preserving ML",
    description:
      "Secure ML system improving privacy, scalability, and trust over centralized approaches.",
    image: `${baseURL}images/healthcare-security.jpg`,
  },
  {
    title: "Stock Trading Platform (Zerodha Clone)",
    category: "Full-stack Zerodha Clone",
    tools: "React, Node.js, Express.js, MongoDB, JWT, stock APIs, charts",
    description:
      "Authentication, portfolio tracking, real-time stock data, and live market visualization.",
    image: `${baseURL}images/stock-trading.jpg`,
  },
  {
    title: "MATRU-SNEH HEALTH APP",
    category: "Android Maternal Health Tracker",
    tools: "Android, Kotlin, Room DB, WorkManager, local Kannada UI, GenAI planning",
    description:
      "A rural maternal health app for nutrition checklists, kick counters, vaccination reminders, and danger-sign alerts. It digitizes mother-child health records, supports offline use, and delivers weekly baby growth updates in Kannada.",
    image: `${baseURL}images/MATRU-SNEH.png`,
  },
  {
    title: "AI Resume Screening Agent",
    category: "AI Resume Analyzer",
    tools: "Llama 3.1, Groq API, PDF parsing, Python",
    description:
      "Automated resume scoring, candidate ranking, and feedback generation.",
    image: `${baseURL}images/resume-screener.jpg`,
  },
  {
    title: "Interactive 3D Portfolio Website",
    category: "Personal Portfolio Showcase",
    tools: "React, TypeScript, GSAP, Three.js, Vite, responsive CSS",
    description:
      "A modern portfolio website built to showcase interactive 3D visuals, smooth scrolling animations, and responsive project storytelling. It highlights technical skills through custom React components, animation effects, and optimized performance across devices.",
    image: `${baseURL}images/portfolio.png`,
  },
  {
    title: "Smart Traffic Management using Computer Vision",
    category: "Computer Vision",
    tools: "YOLOv3, OpenCV, Python",
    description:
      "Vehicle detection and signal optimization based on real-time congestion.",
    image: `${baseURL}images/smart-traffic.jpg`,
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const flex = flexRef.current;
    if (!section || !flex) return;

    const getScrollDistance = () => {
      // Compute the desired scroll distance based on the last project's right
      // edge so oversized pseudo-elements (e.g. very wide lines) don't inflate
      // `flex.scrollWidth` and produce an excessive scroll range.
      try {
        const sectionWidth = section.clientWidth;
        const lastBox = flex.lastElementChild as HTMLElement | null;
        const fullScroll = Math.max(0, flex.scrollWidth - sectionWidth);
        if (!lastBox) return Math.max(0, Math.min(fullScroll, 0) + 300);

        const lastEdge = lastBox.offsetLeft + lastBox.offsetWidth;
        const desired = Math.max(0, lastEdge - sectionWidth);

        // Prefer the last-box-based value (it bounds the meaningful content),
        // but never exceed the full scrollable width.
        return Math.max(0, Math.min(fullScroll, desired) + 350);
      } catch (e) {
        return 0;
      }
    };

    let scrollDistance = getScrollDistance();
    let animation: gsap.core.Tween | null = null;
    let trigger: ScrollTrigger | null = null;

    const createAnimation = () => {
      if (animation) animation.kill();
      if (trigger) trigger.kill();

      scrollDistance = getScrollDistance();
      animation = gsap.to(flex, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      trigger = animation.scrollTrigger as ScrollTrigger;
    };

    createAnimation();

    const handleResize = () => {
      createAnimation();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animation) animation.kill();
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <div className="work-section" ref={sectionRef} id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
              <WorkImage
                image={project.image ?? `${baseURL}images/placeholder.webp`}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;