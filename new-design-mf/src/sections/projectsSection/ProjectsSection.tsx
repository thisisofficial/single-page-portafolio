import React from 'react'
import { ProjectOverlay } from '../../components/projectOverlay/ProjectOverlay';
import { Button } from '../../components/button/Button';
import Image1 from '../../assets/Bitmapprojects-1.png';
import Image2 from '../../assets/Bitmapprojects-2.png';
import Image3 from '../../assets/Bitmapprojects-3.png';
import Image4 from '../../assets/Bitmapprojects-4.png';
import Image5 from '../../assets/Bitmapprojects-5.png';
import Image6 from '../../assets/Bitmapprojects.png';
import './projectsSection.css';

export const ProjectsSection = () => {
  return (
    <div className='projects-container'>
        <div className='projects-header'>
            <div className='projects-header-title'>Projects</div>
            <div className='projects-header-button'> <Button label='CONTACT ME'/></div>
        </div>
        <div className='projects-part'>
            <ProjectOverlay name='DESIGN PORTAFOLIO' image={Image6} skills='HTML  CSS'/>
            <ProjectOverlay name='E-LEARNING LANDING PAGE' image={Image1} skills='HTML  CSS'/>
        </div>
        <div className='projects-part'>
            <ProjectOverlay name='TODO WEB APP' image={Image2} skills='HTML CSS JAVASCRIPT'/>
            <ProjectOverlay name='ENTERTAINMENT WEB APP' image={Image3} skills='HTML CSS JAVASCRIPT'/>
        </div>
        <div className='projects-part'>
            <ProjectOverlay name='MEMORY GAME' image={Image4} skills='HTML CSS JAVASCRIPT'/>
            <ProjectOverlay name='ART GALLERY SHOWCASE' image={Image5} skills='HTML     CSS     JAVASCRIPT'/>
        </div>
    </div>
  )
}
 