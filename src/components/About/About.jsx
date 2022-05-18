import { faCss3, faGit, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AnimatedLettres from '../Animated/AnimatedLettres'
import Loader from 'react-loaders'
import './about.scss'

const About = () => {
    const [lettreClass, setlettreClass] = useState('text-animated')
    useEffect(() => {
        setTimeout(async() => {
          setlettreClass('text-animated-hover')
        }, 3000)
      }, [])
  return (
      <>
    <div className='container about-page' >
        <div className="text-zone">
            <h1>
                <AnimatedLettres lettreClass={lettreClass}  idx={15} strArray={['A','b','o','u','t',' ','M','e',]} />
            </h1>
            <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cubic-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faPython} />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGit} color='#EC4D28' />
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About
