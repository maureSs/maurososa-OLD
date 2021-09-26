import React, { useState } from 'react';
// React Router
import { Link } from 'react-router-dom';
// components
import NavbarComponent from '../components/NavbarComponent';
// emailjs
import emailjs from 'emailjs-com';
// styles
import { Wrapper } from '../components/Contact.styles';
// icons
import { RiCloseLine } from 'react-icons/ri';

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
      <Wrapper>
        <div className='navbar-display'>
          <NavbarComponent />
        </div>
        <div className='vl'></div>
        <Link to='/' className='navbar-item'>
          <RiCloseLine className='go-back' />
        </Link>
        <h2>CONTACT ME</h2>
        <div className='contact-container'>
          {showForm ? (
            <form onSubmit={sendEmail}>
              <div className='form-control'>
                <RiCloseLine
                  className='cancel-button'
                  onClick={() => setShowForm(!showForm)}
                />
                <label>
                  <h4 className='extra'>Your Name</h4>
                  <input type='text' placeholder='Name' name='name' />
                </label>
                <label>
                  <h4 className='extra'>Your Email</h4>
                  <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                  />
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
            <>
              <div className='button-wrapper'>
                <div className='link-wrapper'>
                  <button
                    className='open-form-button'
                    onClick={() => setShowForm(!showForm)}
                  >
                    CONTACT FORM
                  </button>
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 268.832 268.832'
                    >
                      <path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='button-wrapper' style={{ marginTop: 120 }}>
                <div className='link-wrapper'>
                  <a
                    href='mailto:maurososa118@gmail.com'
                    className='open-form-button'
                    style={{ fontSize: 15, height: 45 }}
                  >
                    SEND ME AN EMAIL!
                  </a>
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 268.832 268.832'
                    >
                      <path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
