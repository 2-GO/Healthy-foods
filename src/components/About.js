import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-sections-container" >
        <div classname="about-background-image-container" >
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container" >
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container" >
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Food is an important part of a balanced diet
            </h1>
            <p className="primary-text" >
                Stop eatig crap and start taking control of your health. You are what you eat.
            </p>
            <p className="primary-text" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            <div className="about-buttons-container" >
                <button className="secondary-button" >Learn More</button>
                <button className="watch-video-button">
                    {" "}
                    <BsFillPlayCircleFill /> Watch Video
                </button>
            </div>
        </div>
    </div>
  )
}

export default About