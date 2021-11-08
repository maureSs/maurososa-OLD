import React, { useState } from 'react';
// React Router
import { Link } from 'react-router-dom';
// components
import NavbarComponent from '../components/NavbarComponent';
// styles
import { Wrapper } from '../components/About.styles';
// icons & images
import { RiCloseLine } from 'react-icons/ri';
import js from '../images/js.svg';
import ts from '../images/ts.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';

export default function About() {
  const [showExperienceInfo, setShowExperienceInfo] = useState(false);
  const [showSkillsInfo, setShowSkillsInfo] = useState(false);

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
            Hey Hello! It's Mauro!
            <br />
            I'm a Frontend developer from Buenos Aires, Argentina. I usually
            work with React / Redux but I love learning new technologies and
            tools.
            <br />
            22 y/o in love with the technology.
            {showExperienceInfo ? (
              <h3 className='exp-position'>
                {' '}
                +1.5 years developing as a Frontend developer{' '}
              </h3>
            ) : (
              <div className='first-button-container'>
                <button
                  className='btn'
                  onClick={() => setShowExperienceInfo(!showExperienceInfo)}
                >
                  Experience
                </button>
              </div>
            )}
            {showSkillsInfo ? (
              <div className='icons-container'>
                <img className='icon-design' src={js} alt='JavaScript' />
                <img className='icon-design' src={ts} alt='TypeScript' />
                <img className='icon-design' src={react} alt='React' />
                <img className='icon-design' src={redux} alt='Redux' />
              </div>
            ) : (
              <div className='second-button-container'>
                <button
                  className='btn'
                  onClick={() => setShowSkillsInfo(!showSkillsInfo)}
                >
                  Languages and Tools
                </button>
              </div>
            )}
          </div>
        </Wrapper>
      </div>
    </>
  );
}
