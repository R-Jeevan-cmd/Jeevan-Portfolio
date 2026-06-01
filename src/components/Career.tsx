import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-left">
              <div className="career-role">
                <h4>10th Grade (ICSE)</h4>
                <h5>Sri R.V. School, Kolar</h5>
              </div>
            </div>
            <div className="career-info-right">
              <h3>2019 - 2020</h3>
              <p>Score: 95.20%.</p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-left">
              <div className="career-role">
                <h4>12th / Pre-University(PUC)</h4>
                <h5>Vidya Jyothi PU College, Kolar</h5>
              </div>
            </div>
            <div className="career-info-right">
              <h3>2020 - 2022</h3>
              <p>Score: 89.67%.</p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-left">
              <div className="career-role">
                <h4>B.E. in Computer Science and Engineering (AIML)</h4>
                <h5>JSS Academy of Technical Education, Bengaluru</h5>
              </div>
            </div>
            <div className="career-info-right">
              <h3>2022 - 2026</h3>
              <p>
                Pursuing Computer Science and Engineering with specialization in
                Artificial Intelligence and Machine Learning. CGPA: 8.6.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-left">
              <div className="career-role">
                <h4>Android App Development Intern</h4>
                <h5>MindMatrix</h5>
              </div>
            </div>
            <div className="career-info-right">
              <h3>2026</h3>
              <p>
                Integrated GenAI APIs to enhance Android app interactions and
                improved performance by optimizing API calls and modularizing
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
