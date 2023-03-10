import React from 'react';

 const Contact = () => {
return (
  <section className='contact-section' id='contact'>
    <div className="contact-header__container">
      <h1 data-aos="zoom-in-down">Let's get in touch...</h1>
      <img className='contact__svg' src='/svg/javascript_illustration.png' alt='Contact'/>
    </div>
    <div className='contact-header-bar header-bar' data-aos="zoom-in-down"></div>
    <form className='form-container' action="https://formsubmit.co/rath.jordan@icloud.com" method="POST" data-aos="zoom-in-down">
        <div className="contact-form__title">
          <label htmlFor="name" >
            Name
          </label>
            <input type="text" id="name" placeholder='John Doe' name="name" required />
        </div>
          <div className="contact-form__title">
            <label htmlFor="email">
              Email
            </label> 
            <input type="email" id="email" placeholder='Enter an email...' name="email" required />
        </div>
          <div className="contact-form__title">
            <label htmlFor="message">
              Message
            </label>
            <textarea id="message" name="message" placeholder='Write me a message...' required />
        </div>
        <div className='btn-container'> 
          <button type="submit" className='btn'>Submit</button>
        </div> 
    </form>
  </section>
  );
};

export default Contact
