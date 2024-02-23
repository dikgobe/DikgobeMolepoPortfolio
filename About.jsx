import "./About.css";
import profileImage from './myPicture.jpg'; 
import React from "react";

const About = () => {
  return (
    <div className="about-me-container">
      <h1 style = {{color:"white",marginBottom:"100px"}}>About Me</h1>
      <div className="bio">
        
        <p   className="about-paragraph" style={{color: "#82CEDB"}}>
          
        </p>
      </div>
      <div className="pic-skills-container">
          <div>
                <img className="about-picture" src={profileImage} alt="my-picture"  />
          </div>
      <div className="skills" style={{backgroundColor : "#E7E8E8"}}>
        <h2>Certifications</h2>
        <ul style={{color:"black"}}>
          <li>AWS restart programme</li>
          <li>CCent cisco certification</li>
          <li>AWS cloud Practitioner</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
      </div>
      <div className="experience">
        <h2 className="EmployHeader" style={{color:"#E7E8E8"}}>Experience</h2>
        <ul className="experience" style = {{color: "#E7E8E8"}}>
          <li>
            Capaciti - Software Development Intern (17 July 2023 - 17 January
            2024)
          </li>
          <li>
            Younglings - Junior Software Developer (17 January 2024 - 17 January
            2025)
          </li>
          {/* Add more experiences as needed */}
        </ul>
      </div>
      <div className="education" style={{color:"#E7E8E8"}} >
        <h2 className="education" style={{color : "white"}}>Education</h2>
        <ul className="education">
          <li>
            Bsc Mathematics & Computer science - University of South Africa
            (2024)
          </li>

          {/* Add more education details as needed */}
        </ul>
      </div>
      <div className="social-links">
        <h2 className="social-links" style={{color : "white"}}>Social Links</h2>
        <ul className="social-links">
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          {/* Add more social links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default About;
