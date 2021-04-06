import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import { MdFolderOpen } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

export default function NavbarComponent() {
  return (
    <div className='navbar'>
      <h1 className='title'>Mauro</h1>
      <div className='vl'></div>
      <ul>
        <div>
          <li>
            <Link to='/' className='navbar-item'>
              <AiOutlineHome style={{ marginBottom: -3 }}></AiOutlineHome>
              <p style={{ display: 'inline-block', paddingLeft: '25%' }}>
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to='/about' className='navbar-item'>
              <RiUser3Line style={{ marginBottom: -3 }}></RiUser3Line>{' '}
              <p
                style={{
                  display: 'inline-block',
                  paddingLeft: '20%',
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
              <MdFolderOpen style={{ marginBottom: -4 }}></MdFolderOpen>{' '}
              <p
                style={{
                  display: 'inline-block',
                  paddingLeft: '20%',
                }}
              >
                Projects
              </p>
            </Link>
          </li>
          <li>
            <Link to='/contact' className='navbar-item'>
              <HiOutlineMail style={{ marginBottom: -4 }}></HiOutlineMail>{' '}
              <p style={{ display: 'inline-block', paddingLeft: '20%' }}>
                Contact
              </p>
            </Link>
          </li>
        </div>
      </ul>
      <h4>&#169; 2021 Mauro Sosa</h4>
    </div>
  );
}
