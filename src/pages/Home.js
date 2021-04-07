import React from 'react';
import me from '../images/me.png';
import pixelMe from '../images/pixelMe.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';

function Home() {
  return (
    <div>
      <div className='inner-container'>
        <div className='image-container'>
          <img src={me} alt='' />
          <img className='transition-image' src={pixelMe} alt='' />
        </div>
      </div>
      <div className='description'>
        <h2
          style={{
            fontFamily: 'Segoe Print',
            fontSize: 30,
          }}
        >
          Mauro Sosa
        </h2>
        <h4
          style={{ marginLeft: '13%', fontSize: 20, fontFamily: 'SimSun-ExtB' }}
        >
          Web Developer
        </h4>
      </div>
      <div className='social-media'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/mauro-sosa-32332920b/'
          rel='noopener noreferrer'
        >
          <img src={linkedin} alt='linkedinIcon' />
        </a>
        <a
          target='_blank'
          href='https://twitter.com/maurososaa_'
          rel='noopener noreferrer'
        >
          <img
            style={{ marginBottom: '-2%' }}
            src={twitter}
            alt='twitterIcon'
          />
        </a>
        <a
          target='_blank'
          href='https://github.com/maureSs'
          rel='noopener noreferrer'
        >
          <img style={{ marginBottom: '-2%' }} src={github} alt='githubIcon' />
        </a>
      </div>
    </div>
  );
}

export default Home;
