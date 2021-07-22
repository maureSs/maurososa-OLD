import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import hacker from '../images/hacker.png';

export default function About() {
  return (
    <div className='main-container'>
      <NavbarComponent />
      <div className='about-container'>
        Hey Hello!
        <br />
        My name is Mauro, I am 22 years old and I am a highly capable front-end
        developer from Buenos Aires, Argentina. I have been in the programming
        world for several years, but in 2019 my interest in web development
        began. In 2020 I started developing my first web applications, using
        React.js. Since then I have learned new tools and technologies and have
        also improved on what I already knew. I aspire to be a software
        developer in the future. Over time I realized that I love learning new
        technologies and being able to implement them in my projects, in order
        to create fun and useful applications.
        <div>
          <img src={hacker} alt='' />
        </div>
      </div>
    </div>
  );
}
