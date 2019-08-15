import React from "react";

const Project = props => {

  const links = {
    shigan:"http://www.ichooseu.co/",
    ichooseu:"http://www.shigan.co",
    tobehonest:"http://www.to-be-honest.herokuapp.com"
  }

  return (
    <main>
      <h1 className="lg-heading">Projects</h1>
      <h2 className="sm-heading">
      </h2>
      <div className="about-info">
        <div className="job">
          <h3>Shigan</h3>
          <a href={links.shigan}>{links.shigan}</a>
          <p>
            Stock portfolio application.
          </p>
        </div>
        <div className="job">
          <h3>To Be Honest</h3>
          <a href={links.tobehonest}>{links.tobehonest}</a>
          <p>
            News sentiment application
          </p>
        </div>
        <div className="job">
          <h3>I Choose U</h3>
          <a href={links.ichooseu}>{links.ichooseu}</a>
          <p>
            Pokemon database application
          </p>
        </div>
      </div>
    </main>
  );
};

export default Project;
