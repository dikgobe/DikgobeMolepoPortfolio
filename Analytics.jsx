import React from "react";
import "./Analytics.css";
import python from "./Python-Symbol.png";
import { Link } from "react-router-dom";
import mypicture from "./html,css.jpg";
import javapic from "./java-image.png";

const Analytics = () => {
  return (
    <div className="projects-container">
    <h1 className="projects-heading">Projects</h1>
      <div className="card-container">
        <Link className="javapic-container" to="https://github.com/dikgobe/Financial-Calculator">
          <img   src={javapic} alt="Image 1" width="350" height="200" />
        </Link>
        <div className="description-paragraph">
          <h3 className="project-paragraph">Financial calculator</h3>
          <p style={{color: "white"}}>
            The task was to develop a Tax Calculator System using the Waterfall
            Model. Tax obligations are calculated based on individuals' annual
            income. Employing Java as our programming language, known for its
            reliability, the aim is to deliver a transparent and user-friendly
            system.<span style={{color: "blue"}}> click on the picture to be directed to the github Project</span>
          </p>
        </div>
      </div>
      <div className="projects-container2">
        <Link  className="javapic-container" to="https://github.com/Sikhuphela/Banking-App">
          <img className="python-pic-container"   src={python} alt="Image 2" width="350" height="200" />
        </Link>
        <div className="description paragraph">
          <h3>Banking App</h3>
          <p>
            The project was to create a user-friendly GUI (Graphical User
            Interface) application using Python-Tkinter for efficient bank
            account management. Users can easily register and log in to access
            their accounts, providing essential details during registration.
            <span style={{color: "blue"}}> click on the picture to be directed to the github Project</span>
          </p>
        </div>
      </div>
      <div className="projects-container3">
        <Link className="javapic-container" to="https://github.com/LehlohonoloKhoathane/ColaborativeWebsite">
          <img className="html-container"   src={mypicture} alt="Image 3" width="350" height="200" />
        </Link>
        <div className="description paragraph">
          <h3 style={{color: "white"}}>Midnight coders App</h3>
          <p style={{color: "white"}}>
          I contributed to the creation of a website
          featuring the classic Tic Tac Toe game, developed using HTML, JavaScript,
          and CSS. Leveraging my skills in front-end technologies, I played a pivotal
          role in designing the game's user interface to ensure intuitive gameplay and responsive
          design across various devices. <span style={{color: "blue"}}> click on the picture to be directed to the github Project</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
