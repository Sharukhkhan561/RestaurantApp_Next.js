import React from "react";
import "./Menu.css";
import myImg from "../../profile.jpeg";
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from "react-icons/fc";

const Menus = ({ toggle }) => {
  
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={myImg} alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-Link">
                <FcHome />
                Home
              </div>
              <div className="nav-Link">
                <FcAbout />
                About
              </div>
              <div className="nav-Link">
                <FcPortraitMode />
                Work Expeirence
              </div>
              <div className="nav-Link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-Link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-Link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-Link">
                <FcVoicePresentation />
                Testimonials
              </div>
              <div className="nav-Link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="nav-items">
            <div className="nav-item">
        <div className="nav-Link">
                <FcHome title="Home"/>
                
              </div>
              <div className="nav-Link">
                <FcAbout title="About" />
                
              </div>
              <div className="nav-Link">
                <FcPortraitMode title="Work Expeirence" />
                
              </div>
              <div className="nav-Link">
                <FcBiotech title="Tech Stack" />
                
              </div>
              <div className="nav-Link">
                <FcReadingEbook title="Education" />
                
              </div>
              <div className="nav-Link">
                <FcVideoProjector title="Projects" />
                
              </div>
              <div className="nav-Link">
                <FcVoicePresentation title="Testimonials"/>
                
              </div>
              <div className="nav-Link">
                <FcBusinessContact title="Contact"/>
                
              </div>
              </div>
              </div>

        </>
      )}
    </>
  );
};

export default Menus;