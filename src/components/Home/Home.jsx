import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import Logos from '../../assests/images/logo-s.png';
import AnimatedLettres from '../Animated/AnimatedLettres';
import './home.scss';
import Logo from './logo/Logo';
const Home = () => {
  const [lettreClass, setlettreClass] = useState('text-animated')
  const nameArr = ['m','a','i','l']
  const jobArr = ['W','e','b',' ','D','e','v','e','l','o','p','e','r',]
  useEffect(() => {
    setTimeout(async() => {
      setlettreClass('text-animated-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className='container home-page'>
      <div className="text-zone">
        <h1>
          <span className={lettreClass}>H</span>
          <span className={`${lettreClass} _12`}>i,</span>
          <br/>
          <span className={`${lettreClass} _13`}>I</span>
          <span className={`${lettreClass} _14`}>'m</span>
          <span className={`${lettreClass} _15 i_let`}>I</span>
          <img src={Logos} alt="" srcSet="" />
          <AnimatedLettres lettreClass={lettreClass} strArray={nameArr} idx={16} />
          <br/>
          <AnimatedLettres lettreClass={lettreClass} strArray={jobArr} idx={23} />
        </h1>
        <h2>FrontEnd Developer / BackEnd Developer / Youtuber </h2>
        <Link to='/contact' className='flat-btn' > CONTACT ME</Link>
      </div>
        <Logo/>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home