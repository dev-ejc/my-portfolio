import React from "react";

const Interest = () => {
  return (
    <main id="interests">
      <h1 className="lg-heading">Interests</h1>
      <h2 className="sm-heading">
        <span className="text-secondary" />
      </h2>
      <div className="interest-info">
        <div className="interest i1">
          <h3>Ukulele</h3>
          <div className="interest-description">
            <p>The ukulele gives rhythm to my life.</p>
          </div>
        </div>
        <div className="interest i2">
          <h3>Swimming</h3>
          <div className="interest-description">
            <p>Swimming helps me stay fit and mentally strong.</p>
          </div>
        </div>
        <div className="interest i3">
          <h3>Pennyboarding</h3>
          <div className="interest-description">
            <p>
              Pennyboarding unlocks the explorer in <menu />.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Interest;