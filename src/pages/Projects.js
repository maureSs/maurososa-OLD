import React from 'react';
import NavbarComponent from '../components/NavbarComponent';

export default function Projects() {
  return (
    <div className='main-container'>
      <NavbarComponent />
      <div className='projects-container'>
        <h3 className='projects-title'>
          <p className='hide' style={{ color: '#E15C7D' }}>
            ►►►►►►►►
          </p>{' '}
          <p className='title'>Projects</p>{' '}
          <p className='hide' style={{ color: '#E15C7D' }}>
            ◄◄◄◄◄◄◄◄
          </p>
        </h3>
        <div style={{ paddingLeft: '16%' }}>
          <p className='projects-subtitle'>APPS THAT I HAVE MADE:</p>

          <div style={{ marginBottom: '5%' }}>
            <h4 style={{ paddingLeft: '24%' }}>Must-Watch</h4>
            <p>
              Made with React.js and Firebase. An app to take notes of movies
              <br />
              and tv shows you want to watch in the future.
            </p>
            <a
              target='_blank'
              href='https://must-watch-81fcf.web.app/'
              rel='noopener noreferrer'
            >
              <button className='project-btn'>Visit</button>
            </a>
            <a
              style={{ marginLeft: '27.5%', marginTop: '1%' }}
              target='_blank'
              href='https://github.com/maureSs/Must-Watch'
              rel='noopener noreferrer'
            >
              code
            </a>
          </div>
          <div>
            <h4 style={{ paddingLeft: '21%' }}>Meme Generator</h4>
            <p>
              Made with React.js. A fun final project from freeCodeCamp course!
            </p>
            <a
              target='_blank'
              href='https://maures-meme-generator.netlify.app/'
              rel='noopener noreferrer'
            >
              <button className='project-btn'>Visit</button>
            </a>
            <a
              style={{ marginLeft: '27.5%', marginTop: '1%' }}
              target='_blank'
              href='https://github.com/maureSs/Meme-Generator-App'
              rel='noopener noreferrer'
            >
              code
            </a>
          </div>

          <div className='future-projects'>
            <p style={{ paddingLeft: '9%', marginBottom: '2%' }}>
              More coming soon...
            </p>
            <a
              target='_blank'
              href='https://github.com/maureSs'
              rel='noopener noreferrer'
            >
              Find my projects on Github!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
