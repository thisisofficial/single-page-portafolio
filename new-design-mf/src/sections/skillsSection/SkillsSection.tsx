import React from 'react'
import { TextContainer } from '../../components/textBlock/TextBlock';
import Icons from '../../assets/Group-26bg-feature.svg';
import './skillsSection.css';

export const SkillsSection = () => {
  return (
    <div className='skills-container'>
      <div className='skills-part'>
        <TextContainer title='HTML' text='4 years Experience'/>
        <TextContainer title='CSS' text='4 years Experience'/>
        <TextContainer title='Javascript' text='4 years Experience'/>
        <TextContainer title='Accessibility' text='4 years Experience'/>
        <TextContainer title='React' text='3 years Experience'/>
        <TextContainer title='Sass' text='3 years Experience'/>
      </div>
      <div className='skills-extra'>
        <img src={Icons}></img>
      </div>
    </div>
  )
}
