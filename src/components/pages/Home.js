import React, { useState } from "react";

const Home = () => {
  const [state,setState] = useState({
    firstName: 'Eric',
    lastName: 'Chung',
    linkedin:"https://linkedin.com/in/ericjchung",
    github:"https://github.com/ericjchung",
    resume:"https://drive.google.com/file/d/1h8ug9MbCbV3bK2OJuwPp3ke-JyRdEaEY/view?usp=sharing",
    tag:"Moving Forward"
  })

  const { firstName, lastName, linkedin, github,resume, tag } = state
  return (
    <main className="home" style={homeStyle}>
        <div>
          <h1 className="lg-heading">
            {firstName}{' '}{lastName}
            {/* <span className="text-secondary">{' '}{lastName}</span> */}
          </h1>
          <h2 className="sm-heading">
      </h2>
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
