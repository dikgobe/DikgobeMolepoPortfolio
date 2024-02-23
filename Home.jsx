import React from "react";
import "./Home.css";
import profileImage from "./myPicture.jpg";

function Home() {
  return (
    <>

    <section>
      <div className="home">
        <div className="home-content">
          <h3 className= "first-title" style={{color: "white"}} >Hi, my name is</h3>
          <h1 style={{color: "aquamarine"}}>Dikgobe Molepo</h1>
          <h3 className= "myParagraph" style={{color: "white"}}>And i'm a<span> Frontend developer</span></h3>
          <p  className= "paragraph" style={{color: "white"}}>
            
          </p>
          <a href="#" className="btn">
            Download CV
          </a>
        </div>
        <div className="home-image">
            <img style = {{borderRadius: "300px"}} width={500} height={500} src={profileImage}/>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
