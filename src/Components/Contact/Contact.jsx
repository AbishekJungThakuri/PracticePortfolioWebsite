import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

export const Contact = () => {
    
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4a012529-997c-4363-aa85-57d5311b218a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(data.message)
        event.target.reset();
      }
    }
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take a new projects, so feel free to send me a message about
                anything that you want to worl on. You can contact anytime.
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> 
                    <p>abishekjung00@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>904190145</p>

                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Ratnanagar-12, Chitwan</p>

                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
             <button type='submit' className="contact-submit">Submit Now</button>
        </form>
        </div>
    </div>
  )
}
