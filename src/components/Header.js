/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Header = ({
  firtsName, lastName, email, phone, role, links,
}) => (
  <>
    <header className="resume-header pt-4 pt-md-0">
      <div className="media flex-column flex-md-row">
        <img className="mr-3 img-fluid picture mx-auto" src="assets/images/profile.jpg" alt="" />
        <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
          <div className="primary-info">
            <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{firtsName} {' '} {lastName}</h1>
            <div className="title mb-3">{role}</div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">
                  <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3" />
                  {email}
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6" />
                  {phone}
                </a>
              </li>
            </ul>
          </div>
          {/* primary-info */}
          <div className="secondary-info ml-md-auto mt-2">
            <ul className="resume-social list-unstyled">
              {links && links.map((link) => (
                <li key={link} className="mb-3">
                  <a href="/">
                    <span className="fa-container text-center mr-2">
                      <i className="fab fa-linkedin-in fa-fw" />
                    </span>
                    {link}
                  </a>
                </li>
              ))}
              {/* <li className="mb-3">
                <a href="/">
                  <span className="fa-container text-center mr-2"><i className="fab fa-linkedin-in fa-fw" /></span>
                  linkedin.com/in/stevedoe
                </a>
              </li>
              <li className="mb-3">
                <a href="/">
                  <span className="fa-container text-center mr-2"><i className="fab fa-github-alt fa-fw" /></span>
                  github.com/username
                </a>
              </li>
              <li className="mb-3">
                <a href="/">
                  <span className="fa-container text-center mr-2"><i className="fab fa-codepen fa-fw" /></span>
                  codepen.io/username/
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="fa-container text-center mr-2"><i className="fas fa-globe" /></span>
                  yourwebsite.com
                </a>
              </li> */}
            </ul>
          </div>
          {/* secondary-info */}
        </div>
        {/* media-body */}
      </div>
      {/* media */}
    </header>

  </>
);

export default Header;
