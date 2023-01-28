import React from 'react'
import { Button } from '../button/Button'
import './projectOverlay.css';

interface IProjectProps{
    name: string;
    skills: string;
    image: any;
}

export const ProjectOverlay = ({name, skills, image} : IProjectProps) => {
  return (
    <div className='project-container'>
        <div className='project-image'>
            <img src={image}/>
        </div>
        <div className='project-details'>
            <h1 className='project-title'>{name}</h1>
            <p className='project-skills'>{skills}</p>
        </div>
        <div className='project-buttons'>
            <div className='project-overlay'>
                <Button label='VIEW PROJECT'/>
                <Button label='VIEW CODE'/>
            </div>
        </div>
    </div>
  )
}
