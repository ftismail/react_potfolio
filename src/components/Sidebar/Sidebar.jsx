import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import Logos from '../../assests/images/logo-s.png';
import Logos_sub from '../../assests/images/logo_sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub,faYoutube,faSkype} from '@fortawesome/free-brands-svg-icons';
import './sidebar.scss'
function Sidebar() {
  return (
    <div className='nav-side' >
        <Link className='logo' to='/'>
            <img src={Logos}  alt='logo' />
            <img className='sub-log' src={Logos_sub} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' activeclasscame='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclasscame='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclasscame='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://immigrantsmaghrebinsenaction.com/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://immigrantsmaghrebinsenaction.com/">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://immigrantsmaghrebinsenaction.com/">
                    <FontAwesomeIcon icon={ faSkype } />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://immigrantsmaghrebinsenaction.com/">
                    <FontAwesomeIcon icon={ faYoutube } />
                </a>
            </li>
        </ul>
        
    </div>
  )
}

export default Sidebar