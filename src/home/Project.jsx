import React, { useContext } from 'react'
import './project.css'
import a from './p1.jpg'
import b from './huy-phan-dM317CbttyY-unsplash (1).jpg'
import c from   './jakob-owens-CiUR8zISX60-unsplash (1).jpg'
import { Card, CardGroup } from 'react-bootstrap'
import { ThemeContext } from './Navtheme'

const Project = () => {
  const themeUse=useContext(ThemeContext)
const {theme,toggleTheme}=themeUse
  return (
    <div id='project' className={theme=='light'?'light':'dark'}>
      <h1 className='text-center'>My Success Work</h1>
     <CardGroup className='card-group2'>
     <Card className='project-img'>
      <Card.Img className='img5' src={a} />
      <div className='overlay1'>
        <h2>University page</h2>
        <a target='_blank' className='project-link' href="https://anujithp007.github.io/University/"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a>
      </div>
     
    </Card>
    <Card className='project-img'>
      <Card.Img className='img5'  src={b} />
      <div className='overlay1'>
        <h2>plant project</h2>
        <a target='_blank' className='project-link' href="https://65a5810186964d21e4b77b85--splendorous-melomakarona-009ef8.netlify.app/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a>
      </div>
      
    </Card>
    <Card className='project-img' >
      <Card.Img className='img5'  src={c} />
      <div className='overlay1'>
        <h2>Movie search</h2>
        <a target='_blank' className='project-link' href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg></a>
      </div>
      
    </Card>
     </CardGroup>
    </div>
  )
}

export default Project
