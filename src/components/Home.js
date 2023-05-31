import React from 'react'
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const home = () => {
  return (
    <div className="home-container" >
        <Navbar />
        <div className="home-banner-container" >
          <div className="home-bannerImage-container" >
            <img src={BannerBackground} alt="" />
          </div>
        </div>
        <div className="home-text-section" >
          <h1 className="primary-heading" >
            Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p>
            Healthy food so good it will make you want to slap yo mama! Guaranteed.
          </p>
          <button className="secondary-button" >
            Order Now <FiArrowRight className="button-icon" />
          </button>
          <div className="home-image-container">
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  );
};

export default home