import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLettres from '../Animated/AnimatedLettres'
import './contact.scss'
const Contact = () => {
    const [lettreClass, setlettreClass] = useState('text-animated')
    useEffect(() => {
        setTimeout(async() => {
          setlettreClass('text-animated-hover')
        }, 3000)
      }, [])
  return (
      <>
    <div className='container contact-page' >
        <div className="text-zone">
            <h1>
                <AnimatedLettres strArray={['C','o','n','t','a','c','t',' ','M','e',]} idx={15} lettreClass={lettreClass}/>
            </h1>
            <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          FETAYAH Ismail
          <br/>
          Algeria
          <br/>
          Kouba, Les annasseurs<br/>
          Alger <br/>
          <span>fetayahismail@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[36.73274926608384, 3.0615000818383695]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.73274926608384, 3.0615000818383695]}>
              <Popup>FETAYAH Isamil here, come over for a cup of coffee :</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact