import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import emailjs from 'emailjs-com';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3z61hud',
        'mywebsite_template',
        e.target,
        'user_Z3sLR33oRS00Qp78KNOCB'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className='main-container'>
      <NavbarComponent />
      <div className='contact-container'>
        <form onSubmit={sendEmail}>
          <div className='form-control'>
            <label>
              <h4 style={{ marginBottom: '1%', fontSize: 20 }}>Your Name</h4>
              <input type='text' placeholder='Name' name='name' />
            </label>
            <label>
              <h4 style={{ marginBottom: '1%', marginTop: '3%', fontSize: 20 }}>
                Your Email
              </h4>
              <input type='email' placeholder='Email Address' name='email' />
            </label>
            <label>
              <h4 style={{ marginBottom: '1%', marginTop: '3%', fontSize: 20 }}>
                Subject
              </h4>
              <input type='text' placeholder='Subject' name='subject' />
            </label>
            <label>
              <h4 style={{ marginBottom: '1%', marginTop: '3%', fontSize: 20 }}>
                Your Message
              </h4>
              <textarea
                className='message-input'
                placeholder='Your message'
                name='message'
              ></textarea>
            </label>
            <input
              className='submit-btn'
              type='submit'
              value='Send Message'
            ></input>
          </div>
        </form>
      </div>
      <div className='email-option'>
        {' '}
        <p style={{ paddingLeft: '40%', paddingBottom: '5%' }}>Or...</p>
        <p className='my-email'>maurososa118@gmail.com</p>
      </div>
    </div>
  );
}
