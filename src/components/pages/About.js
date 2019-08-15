import React from "react";

const About = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">
        Career
      </h1>
      <h2 className="sm-heading"></h2>
      <div className="about-info container">
      <div className="job">
          <h3>Amazon Robotics</h3>
          <h7>Solutions Integration Analyst</h7>
          <p>
            Designed and managed Amazon fulfillment center performance and monitoring tools.
          </p>
        </div>

        <div className="job">
          <h3>MIT Federal Credit Union</h3>
          <h7>Internal Auditor</h7>
          <p>
            Conducted risk controls and reports across newly opened accounts.
          </p>
        </div>

        <div className="job">
          <h3>Wellington Management</h3>
          <h7>Guideline Monitoring Analyst</h7>
          <p>
            Governed portfolio activity using compliance software
            and leveraged technical skills to create portfolio monitoring tools.
          </p>
        </div>

        <div className="job">
          <h3>Korea Financial Intelligence Unit</h3>
          <h7>Intern</h7>
          <p>
            Researched Money laundering legislation, quantitative counter
            terrorist financing strategies and drafted speeches at the annual FATF plenary.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
