import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { HeroSection } from './sections/heroSection/HeroSection'
import { SkillsSection } from './sections/skillsSection/SkillsSection'
import { ProjectsSection } from './sections/projectsSection/ProjectsSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='body-container'>
        <HeroSection/>
        <SkillsSection/>
        <ProjectsSection/>
      </div>
      <div className='footer'>

      </div>
    </div>
  )
}

export default App
