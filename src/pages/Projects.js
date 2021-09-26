import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// components
import NavbarComponent from '../components/NavbarComponent';
// styles
import { Wrapper } from '../components/Projects.styles';
// images
import mustWatch from '../images/mustWatch.jpg';
import gamingStore from '../images/gamingStore.jpg';
import kingpudding from '../images/kingpudding.jpg';
// icons
import { RiCloseLine } from 'react-icons/ri';

export default function Projects() {
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
        <div className='projects-container'>
          <h2 className='projects-title'>
            <p className='title'>PROJECTS</p>{' '}
          </h2>
          <div className='projects-style'>
            <a
              target='_blank'
              href='https://kingpudding.netlify.app/'
              rel='noopener noreferrer'
            >
              <img src={kingpudding} alt='kingpuddingImage' />
            </a>
            <a
              target='_blank'
              href='https://gaming-store.netlify.app/'
              rel='noopener noreferrer'
            >
              <img src={gamingStore} alt='gamingStoreImage' />
            </a>
            <a
              target='_blank'
              href='https://must-watch-81fcf.web.app/'
              rel='noopener noreferrer'
            >
              <img src={mustWatch} alt='mustWatchImage' />
            </a>
          </div>
        </div>
        <div className='future-projects'>
          <a
            className='find-more-style'
            target='_blank'
            href='https://github.com/maureSs'
            rel='noopener noreferrer'
          >
            Find all my projects on GitHub!
          </a>
        </div>
      </Wrapper>
    </div>
  );
}
