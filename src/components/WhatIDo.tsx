import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const handlers: Array<() => void> = [];
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container, index) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          handlers[index] = handler;
          container.addEventListener("click", handler);
        }
      });
    }
    return () => {
      containerRef.current.forEach((container, index) => {
        if (container && handlers[index]) {
          container.removeEventListener("click", handlers[index]);
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Full-stack web applications</h4>
              <p>
                I design responsive React frontends, Node.js/Express APIs, secure authentication, REST integrations, and database-backed products with clean schema design.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">React</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">JWT Auth</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI/ML</h3>
              <h4>Applied data intelligence</h4>
              <p>
                I deliver supervised learning, resume analysis agents, healthcare data security, and computer vision systems using modern ML frameworks and APIs.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">OpenCV</div>
                <div className="what-tags">YOLOv3</div>
                <div className="what-tags">Llama 3.1</div>
                <div className="what-tags">Groq API</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Firebase</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>MOBILE</h3>
              <h4>Android & GenAI health apps</h4>
              <p>
                I build offline-first Android experiences for rural users, like maternal health tracking with kick counters, vaccination reminders, and Kannada-friendly guidance.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Android</div>
                <div className="what-tags">Kotlin</div>
                <div className="what-tags">Room DB</div>
                <div className="what-tags">WorkManager</div>
                <div className="what-tags">Android Studio</div>
                <div className="what-tags">Offline-first</div>
                <div className="what-tags">GenAI</div>
                <div className="what-tags">Accessibility</div>
                <div className="what-tags">Kannada UI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
