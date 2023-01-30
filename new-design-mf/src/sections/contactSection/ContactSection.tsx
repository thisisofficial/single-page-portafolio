import React from 'react'
import { TextContainer } from '../../components/textBlock/TextBlock'
import { Form } from '../../components/form/Form'
import Icons from '../../assets/Group-12.svg';
import Icon from '../../assets/Group-26bg-feature.svg';
import './contactSection.css'

export const ContactSection = () => {
  return (
    <div className='footer-container'>
      <div className='contact-container'>
        <div className='contact-part'>
          <TextContainer big title='Contact' text='I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.'/>
        </div>
        <div className='contact-part'>
          <Form/>
        </div>
      </div>
      <div className='footer-bg'>
        <img className='footer-bg-2' src={Icon}></img>
      </div>
      <div className='footer-foot-container'>
        <div className='footer-foot-title'>adam keyes</div>
        <div className='footer-foot-icons'>
          <img src={Icons}></img>
        </div>
      </div>
    </div>

  )
}
