import React from 'react';

const Courses = ({ courses }) => (
  <>
    <section className="resume-section education-section mb-5">
      <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Courses</h2>
      <div className="resume-section-content">
        <ul className="list-unstyled">
          {courses.map((course) => (
            <li key={course.id} className="mb-2">
              <div className="resume-degree font-weight-bold">
                {course.name}
              </div>
              <div className="resume-degree-org">
                {course.institute}
              </div>
              <div className="resume-degree-time">{course.year}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>

  </>
);

export default Courses;
