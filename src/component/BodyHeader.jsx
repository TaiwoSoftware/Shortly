import React from "react";
import bodyHeaderImage from './images/illustration-working.svg';
const BodyHeader = () => {
  return (
    <div className="headerContainer">
      <div className="bodyHeaderText">
        <h1>More than just 
        <span>shorter links</span></h1>
        <p>
          Build your brand's recognition and get detailed insight on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <div className="bodyHeaderImage">
        <img src={bodyHeaderImage} alt="illustration" />
      </div>
    </div>
  );
};

export default BodyHeader;
