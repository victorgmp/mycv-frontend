import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserById } from '../reducers/userReducer';

import Courses from '../components/Courses';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Interests from '../components/Interests';
import Languages from '../components/Languages';
import Skills from '../components/Skills';
import Summary from '../components/Summary';
import Footer from '../components/Footer';

const resumeView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById('60ad68f51d084f4a8a46b3a5'));
  }, [dispatch]);

  const user = useSelector((state) => state.users);

  return (
    <>
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <Header
            firtsName={user.firtsName}
            lastName={user.lastName}
            email={user.email}
            phone={user.phone}
            role={user.role}
            links={user.links}
          />
          <div className="resume-body p-5">
            {user.summary && (
              <Summary />
            )}
            <div className="row">
              <div className="col-lg-9">
                {user.experience && (
                  <Experience experience={user.experience} />
                )}
              </div>
              <div className="col-lg-3">
                {user.skills && (
                  <Skills skills={user.skills} />
                )}
                {user.education && (
                  <Education education={user.education} />
                )}
                {user.courses && (
                  <Courses courses={user.courses} />
                )}
                {user.languages && (
                  <Languages languages={user.languages} />
                )}
                {user.interests && (
                  <Interests interests={user.interests} />
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default resumeView;
