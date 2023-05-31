import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper" >
        <h1 className="primary-heading" >Have Questions In Mind?</h1>
        <h1 className="primary-heading" >Let Us Help</h1>
        <div className="contact-form-container" >
            <input type="text" placeholder="your@gmail.com" />
            <button className="secondary-button" >Full Send</button>
        </div>
    </div>
  );
};

export default Contact