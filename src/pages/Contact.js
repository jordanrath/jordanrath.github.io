import React, { useState } from 'react';

 const Contact = () => {
  const [characters, setCharacters] = useState(0);

return (
  <section className='contact-section' id='contact'>
    <div className="contact-header__container">
      <div className="contact-title__text">
        <h2 data-aos="fade-in">Let's get in touch</h2>
        <span data-aos="zoom-in-down">.</span>
      </div>
      <img className='contact__svg' src='/svg/javascript_illustration.png' alt='Contact' data-aos="fade-in" />
    </div>
    <div className='contact-header-bar header-bar' data-aos="fade-right"></div>
    <form className='form-container' action="https://formsubmit.co/rath.jordan@icloud.com" method="POST" data-aos="fade-in">
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
          <textarea id="message" name="message" placeholder='Write me a message...' maxLength={1000} onChange={(e) => setCharacters(e.currentTarget.value.length)} required />
          {characters > 0 ? `${characters}/1000` : ""}
        </div>
        <div className='btn-container'> 
          <button type="submit" className='btn'>Submit</button>
        </div> 
    </form>
  </section>
  );
};

export default Contact;
