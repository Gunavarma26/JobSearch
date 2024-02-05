// Footer page

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../style/footer.css'; 

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className='job'>Job</span ><span className='search'>Search</span>
          </div>

          <div className="footer-social">
            <a href="/home" className="social-icon">
              <FaFacebook />
            </a>
            <a href="/home" className="social-icon">
              <FaTwitter />
            </a>
            <a href="/home" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="/home" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul className='footer-ul' >
              <li><a href="/home">About Us</a></li>
              <li><a href="/home">Careers</a></li>
              <li><a href="/home">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Job Seekers</h4>
            <ul className='footer-ul' >
              <li><a href="/home">Search Jobs</a></li>
              <li><a href="/home">Upload Resume</a></li>
              <li><a href="/home">Career Advice</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Employers</h4>
            <ul className='footer-ul' >
              <li><a href="/home">Search a Job</a></li>
              <li><a href="/home">Search Resumes</a></li>
              <li><a href="/home">Employer Services</a></li>
            </ul>
          </div>
        </div>

        <div className='footerplaydiv' >
          <div >
            <h4>Apply on the go</h4>
            <p>Get real-time job updates on our App</p>
          </div>
          <div className='footerplay' >
            <img src='https://static.naukimg.com/s/0/0/i/new-homepage/android-app_v1.png' />
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app_v1.png" alt="" />
          </div>
        </div>

      </footer>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobSearch. All rights reserved.</p>
      </div>
    </>  
  );
};

export default Footer;
