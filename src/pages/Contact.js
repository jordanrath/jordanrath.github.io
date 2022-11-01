import React from 'react';

 const Contact = () => {
return (
  <section className='contact-section' id='contact'>
    <h1 data-aos="fade-right">CONTACT</h1>
    <div className='contact-header-bar header-bar' data-aos="fade-left"></div>
    <form className='form-container' action="https://formsubmit.co/rath.jordan@icloud.com" method="POST" data-aos="zoom-in-down">
        <label htmlFor="name" ></label>
          <input type="text" id="name" placeholder='Name' required />
        <label htmlFor="email"></label> 
          <input type="email" id="email" placeholder='Enter Email' required />
        <label htmlFor="message"></label>
          <textarea id="message" placeholder='Your Message' required />
        <div className='btn-container'> 
          <button type="submit" className='btn'>SUBMIT</button>
        </div> 
        {/* <input type="hidden" name="_next" value="http://localhost:3000/pages/thankyou.html"></input> */}
    </form>
  </section>
  );
};

export default Contact