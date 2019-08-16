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
          <h3>Solutions Integration Analyst</h3>
          <h4>July 2018 - November 2018</h4>
          <p>
            Designed and managed Amazon fulfillment center performance and monitoring tools.
          </p>
        </div>

        <div className="job">
          <h3>MIT Federal Credit Union</h3>
          <h3>Internal Auditor</h3>
          <h4>October 2017 - February 2018</h4>
          <p>
            Conducted risk controls and reports across newly opened accounts.
          </p>
        </div>

        <div className="job">
          <h3>Wellington Management</h3>
          <h3>Guideline Monitoring Analyst</h3>
          <h4>January 2017 - July 2017</h4>
          <p>
            Governed portfolio activity using compliance software
            and leveraged technical skills to create portfolio monitoring tools.
          </p>
        </div>

        <div className="job">
          <h3>Korea Financial Intelligence Unit</h3>
          <h3>Intern</h3>
          <h4>May 2016 - July 2016</h4>
          <p>
            Researched Money laundering legislation and quantitative counter
            terrorist financing strategies.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
