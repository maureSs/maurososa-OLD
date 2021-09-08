import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import { MdFolderOpen } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

export default function NavbarComponent() {
  return (
    <>
      <div className='navbar'>
        <h1 className='title'>Mauro</h1>
        <div className='vl'></div>
        <ul>
          <div>
            <li>
              <Link to='/' className='navbar-item'>
                <AiOutlineHome
                  className='res-item'
                  style={{ marginBottom: -3 }}
                ></AiOutlineHome>
                <p style={{ display: 'inline-block', paddingLeft: 32 }}>Home</p>
              </Link>
            </li>
            <li>
              <Link to='/about' className='navbar-item'>
                <RiUser3Line
                  className='res-item'
                  style={{ marginBottom: -3 }}
                ></RiUser3Line>{' '}
                <p
                  style={{
                    display: 'inline-block',
                    paddingLeft: 27,
                  }}
                >
                  About
                </p>
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link to='/projects' className='navbar-item'>
                <MdFolderOpen
                  className='res-item'
                  style={{ marginBottom: -4 }}
                ></MdFolderOpen>{' '}
                <p
                  style={{
                    display: 'inline-block',
                    paddingLeft: 27,
                  }}
                >
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link to='/contact' className='navbar-item'>
                <HiOutlineMail
                  className='res-item'
                  style={{ marginBottom: -4 }}
                ></HiOutlineMail>{' '}
                <p style={{ display: 'inline-block', paddingLeft: 26 }}>
                  Contact
                </p>
              </Link>
            </li>
          </div>
        </ul>
        <h4>&#169; 2021 Mauro Sosa</h4>
      </div>
      <div className='mobile-nav-container'>
        <details>
          <summary></summary>
          <nav className='mobile-menu'>
            <Link to='/' className='nav-item'>
              <p>Home</p>
            </Link>
            <Link to='/about' className='nav-item'>
              <p>About</p>
            </Link>
            <Link to='/projects' className='nav-item'>
              <p>Projects</p>
            </Link>
            <Link to='/contact' className='nav-item'>
              <p>Contact</p>
            </Link>
          </nav>
        </details>
        <h1>Mauro Sosa</h1>
      </div>
    </>
  );
}
