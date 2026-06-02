import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const baseURL = import.meta.env.BASE_URL ?? "/";

const projects = [
  {
    title: "Stock Trading Platform",
    category: "Full-stack Zerodha Clone",
    tools: "React, Node.js, Express.js, MongoDB, JWT, stock APIs, charts",
    description:
      "Authentication, portfolio tracking, real-time stock data, and live market visualization.",
    image: `${baseURL}images/stock-trading.jpg`,
  },
  {
    title: "Healthcare Data Security",
    category: "Federated Learning & Blockchain",
    tools: "Python, federated learning, blockchain, privacy-preserving ML",
    description:
      "Secure ML system improving privacy, scalability, and trust over centralized approaches.",
    image: `${baseURL}images/healthcare-security.jpg`,
  },
  {
    title: "Resume Screener Agent",
    category: "AI Resume Analyzer",
    tools: "Llama 3.1, Groq API, PDF parsing, Python",
    description:
      "Automated resume scoring, candidate ranking, and feedback generation.",
    image: `${baseURL}images/resume-screener.jpg`,
  },
  {
    title: "Smart Traffic Management",
    category: "Computer Vision",
    tools: "YOLOv3, OpenCV, Python",
    description:
      "Vehicle detection and signal optimization based on real-time congestion.",
    image: `${baseURL}images/smart-traffic.jpg`,
  },
  {
    title: "Portfolio Website",
    category: "Personal Portfolio Showcase",
    tools: "React, TypeScript, GSAP, Three.js, Vite, responsive CSS",
    description:
      "A modern portfolio website built to showcase interactive 3D visuals, smooth scrolling animations, and responsive project storytelling. It highlights technical skills through custom React components, animation effects, and optimized performance across devices.",
    image: `${baseURL}images/portfolio.png`,
  },
  {
    title: "MATRU-SNEH HEALTH APP",
    category: "Android Maternal Health Tracker",
    tools: "Android, Kotlin, Room DB, WorkManager, local Kannada UI, GenAI planning",
    description:
      "A rural maternal health app for nutrition checklists, kick counters, vaccination reminders, and danger-sign alerts. It digitizes mother-child health records, supports offline use, and delivers weekly baby growth updates in Kannada.",
    image: `${baseURL}images/MATRU-SNEH.png`,
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
        if (!lastBox) return fullScroll;

        const lastEdge = lastBox.offsetLeft + lastBox.offsetWidth;
        const desired = Math.max(0, lastEdge - sectionWidth);

        // Prefer the last-box-based value (it bounds the meaningful content),
        // but never exceed the full scrollable width.
        return Math.max(0, Math.min(fullScroll, desired) + 300);
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
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
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