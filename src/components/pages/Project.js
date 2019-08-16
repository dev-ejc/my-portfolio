import React from "react";

const Project = props => {

  const links = {
    shigan:"https://shigan.herokuapp.com",
    ichooseu:"https://i-choose-u.herokuapp.com",
    tobehonest:"https://to-be-honest.herokuapp.com"
  }

  return (
    <main>
      <h1 className="lg-heading">Projects</h1>
      <h2 className="sm-heading">
      </h2>
      <div className="about-info">
        <a href={links.shigan}>
        <div className="job">
          <h1>Shigan</h1>
          <h3>Personal Stock Portfolio Application</h3>
          <p>
          Full stack web application for managing a personal stock portfolio with buy and sell features.
          </p>
        </div>
        </a>
        <a href={links.tobehonest}>
        <div className="job">
          <h1>To Be Honest</h1>
          <h4>News Sentiment Scoring Application</h4>
          <p>
          Search engine that scores general news sentiment of topic using a natural language processing library. 
          </p>
          </div>
          </a>
          <a href={links.ichooseu}>
        <div className="job">
          <h1>I Choose U</h1>
          <h4>Pokemon Search Engine</h4>
          <p>
          User interface to streamline search functions of  Pokemon stats and move pools.
          </p>
        </div>
      </a>
      </div>
    </main>
  );
};

export default Project;
