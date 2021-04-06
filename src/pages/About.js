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
        My name is Mauro and I am a highly capable, Front-end developer from
        Buenos Aires, Argentina. I love learning new technologies and being able
        to implement them in my projects, in order to create fun and useful
        applications.
        <div>
          <img src={hacker} alt='' />
        </div>
      </div>
    </div>
  );
}
