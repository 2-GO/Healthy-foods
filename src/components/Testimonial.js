import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Testimonial = () => {
  return (
    <div className="work-section-wrapper" >
      <div className="work-section-top" >
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">Whate Our Customer Are Saying</h1>
        <p className="primary-text">
          Take a look at what our super cool customers are saying and anyone who says else are not cool :D
        </p>
      </div>
      <div className="testimonial-section-bottom" >
        <img src={ProfilePic} alt="" />
        <p>
          nothing but vibes and healthy meals
        </p>
        <div className="testimonials-stars-container" >
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Joe Mama</h2>
      </div>

    </div>
  )
}

export default Testimonial