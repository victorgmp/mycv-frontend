/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Skills = ({ skills }) => {
  const frontend = skills.filter((skill) => skill.type === 'frontend');
  const backend = skills.filter((skill) => skill.type === 'backend');
  const others = skills.filter((skill) => skill.type === 'other');

  return (
    <>
      <section className="resume-section skills-section mb-5">
        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
        <div className="resume-section-content">
          {frontend.length > 0 && (
            <div className="resume-skill-item">
              <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
              <ul className="list-unstyled mb-4">
                {frontend.map((front) => (
                  <li key={front.id} className="mb-2">
                    <div className="resume-skill-name">{front.name}</div>
                    <div className="progress resume-progress">
                      <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {backend.length > 0 && (
            <div className="resume-skill-item">
              <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
              <ul className="list-unstyled">
                {backend.map((back) => (
                  <li key={back.id} className="mb-2">
                    <div className="resume-skill-name">{back.name}</div>
                    <div className="progress resume-progress">
                      <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ width: '98%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {others.length > 0 && (
            <div className="resume-skill-item">
              <h4 className="resume-skills-cat font-weight-bold">Others</h4>
              <ul className="list-inline">
                {others.map((other) => (
                  <li key={other.id} className="list-inline-item">
                    <span className="badge badge-light">{other.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

    </>
  );
};

export default Skills;
