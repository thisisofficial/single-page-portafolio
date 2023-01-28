import React from 'react'
import './textBlock.css'

interface IPropsText{
    title: string,
    text: string,
    big?: boolean,
}

export const TextContainer = ({title, text, big}: IPropsText) =>{
  return (
    <div className='text-container'>
        <div className={`text-title ${big&&'big'}`}>{title}</div>
        <div className={`text-content ${big&&'biggie'}`}>{text}</div>
    </div>
  )
}