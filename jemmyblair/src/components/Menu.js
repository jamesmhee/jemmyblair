import * as React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Menu.css';


export default function Menu() {
  return (
    <React.Fragment>
    <Fade bottom>
      <div className="navbar">
        <Link to="/">
          <a className='navbar-menu'>
            HOME
          </a>
        </Link>
        <Link to="/About">
          <a className='navbar-menu'>
            ABOUT
          </a>
        </Link>
        <Link to="/Education">
          <a className='navbar-menu'>
            EDUCATION
          </a>
        </Link>
        <Link to="/Works">
          <a className='navbar-menu'>
            WORKs
          </a>
        </Link>
        <Link to="/Contact">
          <a className='navbar-menu'>
            CONTACT
          </a>
        </Link>
      </div>
    </Fade> 
    </React.Fragment>
  );
}