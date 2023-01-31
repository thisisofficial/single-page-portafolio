import React from 'react'
import { Button } from '../../components/button/Button';
import Adam  from '../../assets/image-removebg-preview(4).png';
import Icon from '../../assets/Group-26bg-feature.svg';
import Circle from '../../assets/OvalCircle.svg';
import Icons from '../../assets/Group-12.svg';
import './heroSection.css';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='hero-bg'>
            <img className='hero-bg-2' src={Icon}></img>
        </div>
        <div className='hero-header'>
            <div className='hero-header-title'>adamkeyes</div>
            <div className='hero-header-icons'>
                <img src={Icons}></img>
            </div>
        </div>
        <div className='hero-info'>
            <div className='hero-info-text'>
                <h1 className='hero-title'>Nice to meet you! I'm <b>Adam Keyes.</b></h1>
                <p className='hero-text'>Based in the UK, I’m a front-end developer<br />passionate about building accessible web apps<br />that users love.</p>
                <Button label='CONTACT US'/>
            </div>
            <div className='hero-info-image'>
                <img className='adam' src={Adam}></img>
                <img className='hero-bg-1' src={Circle}></img>
            </div>
        </div>
    </div>
  )
}
