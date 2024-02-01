import React, { useContext } from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import img2 from './myimg.jpg'
import './about1.css'
import { ThemeContext } from './Navtheme'


const About1 = () => {
  const themeUse=useContext(ThemeContext)
const {theme,toggleTheme}=themeUse

const themechange={
  backgroundColor:theme ? 'white':'black',
  color:theme ? 'black':'white'
}
  return (
    <div id='about' className={theme=='light'?'light':'dark '}>
       <CardGroup>
      <Card>
        <div className='img-div'>

        <Card.Img src= {img2} className=' pb-lg-4 my-img2'/>
        </div>
       
      </Card>
      <Card>
        
        <Card.Body className='pt-5 main-info'>
          <h3>My Biogarphy</h3>
          <h1>A Lead Web Developer & Web Designer  Based In Kerala</h1>
          <p className='p1'>I love Web desinghing & Coding and have been working on my portfolio since 2022. I Can give your business a new Creative start right away! Contact me and we will discuss your projects!</p>
          <div className='right-bio'>
           <p ><span>Name :</span> Anujith P</p>
           <p><span>Location :</span> kerala, India</p>
           <p><span>Email:</span> <a href="">anujithp007@gmail.com</a></p>
           <p><span>Phone NO :</span> 9895132405</p>
          <p></p>
          </div>
          <div className='pt-4 ' >
            <Button className='hireme'>Hire Me</Button>
            <a target='_blank' href="https://www.linkedin.com/in/anujith-p-a5b079239/"> <Button className='contact'>Download CV</Button></a>
          </div>
        </Card.Body>
        
      </Card>
      </CardGroup>
    </div>
  )
}

export default About1
