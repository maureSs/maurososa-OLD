import React, { useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

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
        {showForm ? (
          <form onSubmit={sendEmail}>
            <div className='form-control'>
              <label>
                <h4 className='extra'>Your Name</h4>
                <input type='text' placeholder='Name' name='name' />
              </label>
              <label>
                <h4 className='extra'>Your Email</h4>
                <input type='email' placeholder='Email Address' name='email' />
              </label>
              <label>
                <h4 className='extra'>Subject</h4>
                <input type='text' placeholder='Subject' name='subject' />
              </label>
              <label>
                <h4 className='extra'>Your Message</h4>
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
        ) : (
          <button
            className='open-form-button'
            onClick={() => setShowForm(!showForm)}
          >
            SEND ME AN EMAIL!
          </button>
        )}
      </div>
    </div>
  );
}
