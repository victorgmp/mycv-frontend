/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Education = ({ education }) => (
  <>
    <section className="resume-section education-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
      <div className="resume-section-content">
        <ul className="list-unstyled">
          {education.map((edu) => (
            <li key={edu.id} className="mb-2">
              <div className="resume-degree font-weight-bold">
                {edu.title}
              </div>
              <div className="resume-degree-org">
                {edu.institute}
              </div>
              <div className="resume-degree-time">
                {edu.from} - {edu.to}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

  </>
);

export default Education;
