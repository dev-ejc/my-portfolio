import React from "react";

const Project = props => {

  const links = {
    shigan:"shigan.co",
    ichooseu:"ichooseu.co",
    tobehonest:"tobehonest.dev"
  }

  return (
    <main>
      <h1 className="lg-heading">Projects</h1>
      <h2 className="sm-heading">
      </h2>
      <div className="about-info">
        <a href={links.shigan}>
        <div className="job">
          <h3>Shigan</h3>
          <h3>{links.shigan}</h3>
          <p>
            Stock portfolio application.
          </p>
        </div>
        </a>
        <a href={links.tobehonest}>
        <div className="job">
          <h3>To Be Honest</h3>
          <h3>{links.tobehonest}</h3>
          <p>
            News sentiment application.
          </p>
          </div>
          </a>
          <a href={links.ichooseu}>
        <div className="job">
          <h3>I Choose U</h3>
          <h3>{links.ichooseu}</h3>
          <p>
            Pokemon database application.
          </p>
        </div>
      </a>
      </div>
    </main>
  );
};

export default Project;
