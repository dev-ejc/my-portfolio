import React, { useState } from "react";

const Home = () => {
  const [state,setState] = useState({
    firstName: 'Eric',
    lastName: 'Chung',
    linkedin:"https://linkedin.com/in/ericjchung",
    github:"https://github.com/ericjchung",
    resume:"",
    tag:"Moving Forward"
  })

  const { firstName, lastName, linkedin, github,resume, tag } = state
  return (
    <main className="home" style={homeStyle}>
        <div>
          <h1 className="lg-heading">
            {firstName}
            <span className="text-secondary">{' '}{lastName}</span>
          </h1>
          {/* <h1 className="sm-heading"><i className="fas fa-drafting-compass fa-5x"></i>{tag}</h1> */}
          <div className="icons">
            <a href={linkedin}>
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href={github}>
              <i className="fab fa-github fa-2x" />
            </a>
            <a href={resume}>
              <i className="fas fa-list-alt fa-2x" />
            </a>
          </div>
        </div>
    </main>
  );
};

const homeStyle = {
    padding: "4rem",
    minHeight: "90vh"
}
export default Home;
