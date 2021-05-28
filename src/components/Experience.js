/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';

const Experience = ({ experience }) => (
  <>
    <section className="resume-section experience-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
      <div className="resume-section-content">
        <div className="resume-timeline position-relative">
          {experience.map((exp) => (
            <article key={exp.id} className="resume-timeline-item position-relative pb-5">
              <div className="resume-timeline-item-header mb-2">
                <div className="d-flex flex-column flex-md-row">
                  <h3 className="resume-position-title font-weight-bold mb-1">{exp.position}</h3>
                  <div className="resume-company-name ml-auto">
                    {exp.company}
                  </div>
                </div>
                <div className="resume-position-time">
                  {exp.from} - {exp.to}
                </div>
              </div>
              <div className="resume-timeline-item-desc">
                <p>
                  {exp.description}
                </p>
                {/* <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                <p>
                  Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non provident.
                </p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                  <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                  <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                  <li>Maecenas tempus tellus eget.</li>
                </ul> */}
                <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                <ul className="list-inline">
                  {exp.tecnologies.map((tec) => (
                    <li key={tec} className="list-inline-item">
                      <span className="badge badge-primary badge-pill">{tec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  </>
);

export default Experience;
