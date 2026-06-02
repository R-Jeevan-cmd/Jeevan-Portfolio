import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  gsap.fromTo(
    paras,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top 80%",
      },
    }
  );

  gsap.fromTo(
    titles,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top 80%",
      },
    }
  );
}