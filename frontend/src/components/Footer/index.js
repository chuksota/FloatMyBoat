import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <>
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/chuks-ota-818248127/" className="github_logo">
            <img src={"/Images/linkedInlogo.png"} alt="logo" />
          </a>
          <a href="https://github.com/chuksota" className="github_logo">
            <img src={"/Images/githublogo.png"} alt="logo" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;
