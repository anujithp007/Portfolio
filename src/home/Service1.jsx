import React, { useContext } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './service.css'
import { ThemeContext } from './Navtheme'


const Service1 = () => {
  const themeUse=useContext(ThemeContext)
const {theme,toggleTheme}=themeUse
    
  return (
    <div id='service' className={theme=='light'?'light':'dark'}>
        <h1 className='text-center pt-5  '>What Can I Do For You</h1>
    <div className=''>
    <CardGroup className='p-5 main-card card-group1   '>
    <Card className='card1' style={{borderRadius:'25px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
</svg>
      <Card.Body>
        <Card.Title className='card-title1'>Web Development</Card.Title>
        <Card.Text>
          Done with css, Html,js and React js.Also tried to maintain rasponsivity
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className='card1' style={{borderRadius:'25px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
  <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"/>
</svg>
      <Card.Body>
        <Card.Title className='card-title1'>Front End Development</Card.Title>
        <Card.Text>
        As a front-end developer, my passion lies in creating engaging and intuitive user experiences on the web. With a keen eye for design and a love for coding, I specialize in bringing designs to life through HTML, CSS, and JavaScript.
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card className='card1' style={{borderRadius:'25px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
</svg>
      <Card.Body>
        <Card.Title className='card-title1'>Back End Development</Card.Title>
        <Card.Text>
        As a back-end developer, I thrive on building robust and scalable web applications that operate seamlessly behind the scenes. With a knack for problem-solving and a deep understanding of server-side technologies.
        </Card.Text>
      </Card.Body>
      
    </Card>
  </CardGroup>
  </div>
  </div>
  )
}

export default Service1
