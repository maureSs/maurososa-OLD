import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// components
import NavbarComponent from '../components/NavbarComponent';
// styles
import { Wrapper } from '../components/About.styles';
// images
import hacker from '../images/hacker.png';
// icons
import { RiCloseLine } from 'react-icons/ri';

export default function About() {
  return (
    <>
      <div className='main-container'>
        <Wrapper>
          <div className='navbar-display'>
            <NavbarComponent />
          </div>
          <div className='vl'></div>
          <Link to='/' className='navbar-item'>
            <RiCloseLine className='go-back' />
          </Link>
          <div className='about-container'>
            <h2>ABOUT</h2>
            Hey Hello!
            <br />
            My name is Mauro, and I am a Front-end developer from Buenos Aires,
            Argentina. Over time I realized that I love learning new
            technologies and being able to implement them in my projects, in
            order to create fun and useful applications.
            <div>
              <img src={hacker} alt='' />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
