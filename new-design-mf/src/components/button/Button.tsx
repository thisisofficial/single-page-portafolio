import React from 'react'
import './button.css'

interface IButtonProps{
    label: string,
    link?: string,
}

export const Button = ({label, link} : IButtonProps) =>{
  return (
    <div className='button-container'>
        <a style={{textDecoration: 'none'}}href={link}>
            <div className='button-label'>{label}</div>
        </a>
    </div>
  )
}

