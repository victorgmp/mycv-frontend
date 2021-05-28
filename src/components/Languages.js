/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Languages = ({ languages }) => (
  <>
    <section className="resume-section language-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
      <div className="resume-section-content">
        <ul className="list-unstyled resume-lang-list">
          {languages.map((lang) => (
            <li key={lang} className="mb-2">
              <span className="resume-lang-name font-weight-bold">
                {lang.name}
              </span>
              <small className="text-muted font-weight-normal">
                ({lang.level})
              </small>
            </li>
          ))}
        </ul>
      </div>
    </section>

  </>
);

export default Languages;
