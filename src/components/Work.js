import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


export const Work = () => {
  const workInfoData = [
    {
        image: PickMeals,
        title: "Pick Meals",
        text: "pick your meals and hurry up. Others are waiting",
    },
    {
        image: ChooseMeals,
        title: "Choose Meals",
        text: "choose your meals and hurry up. Others are waiting",
    },
    {
        image: DeliveryMeals,
        title: "Delivery Meals",
        text: "don't worry, We deliver to your lazy butt",
    },
  ];
  
    return (
     <div className="work-section-wrapper" >
          <div className="work-section-top" >
         <p className="primary-subheading" >Work</p>
        <h1 className="primary-heading" > How It Works</h1>
          <p className="primary-text">
              Come take a deep dive and learn how we work. Enjoy.
          </p>
          </div>
          <div className="work-section-bottom" >
             {workInfoData.map((data) => (
                 <div className="work-section-info" >
                     <div className="info-boxes-img-container">
                         <img src={data.image} alt="" />
                     </div> 
                    <h2>{data.title}</h2>
                       <p>{data.text}</p>
                   </div>       
           ))}
    </div>
    </div>
    );
};

export default Work
