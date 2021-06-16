import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import mustWatch from '../images/mustWatch.png';
import gamingStore from '../images/gamingStore.png';
import quizAE from '../images/quizAE.png';

export default function Projects() {
  return (
    <div className='main-container'>
      <NavbarComponent />
      <div className='projects-container'>
        <h3 className='projects-title'>
          <p className='title'>Projects</p>{' '}
        </h3>
        <div className='projects-style'>
          <a
            target='_blank'
            href='https://must-watch-81fcf.web.app/'
            rel='noopener noreferrer'
          >
            <img src={mustWatch} alt='mustWatchImage' />
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
            href='https://quiz-about-everything.netlify.app/'
            rel='noopener noreferrer'
          >
            <img src={quizAE} alt='quizAEImage' />
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
    </div>
  );
}
