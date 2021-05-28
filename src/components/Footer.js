/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Footer = () => (
  <>
    <footer className="footer text-center pt-2 pb-5">
      <small className="copyright">
        Power by MongoDB + Express + React + Node
      </small>
      {' '} - {' '}
      <small className="copyright">
        Designed with
        <i className="fas fa-heart" />
        by
        <a href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer"> Xiaoying Riley</a>
        for developers
      </small>
    </footer>

  </>
);

export default Footer;
