import React from 'react';

const Interests = ({ interests }) => (
  <>
    <section className="resume-section interests-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
      <div className="resume-section-content">
        <ul className="list-unstyled">
          {interests.map((int) => (
            <li key={int} className="mb-1">{int}</li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Interests;
