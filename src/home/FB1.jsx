import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './FB1.css';
import img1 from './my.jpg.png'
import { Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';



const FB1 = () => {

    // const handleButtonClick = () => {
    //     // Replace 'your_linkedin_profile_url' with your actual LinkedIn profile URL
    //     window.location.href = 'www.linkedin.com/in/anujith-p-a5b079239';
    //   };
  return (
    <div  id='home'  className='main-fb'>
       <CardGroup className='opacity '>
      <Card className='left-body'>
        
          <h1 className='mt-2 my-name '>Hi I'm Anujith P</h1>
          <h1 className='my-job mt-2 '><TypeAnimation
    sequence={[
     'Web Developer',1000,
     'Web Designer',1000
    ]}
    
  /></h1>
          <p className='mt-2 '>I love web desining and developing . I work on that since 2022 <br /> I can give your company a new start right away</p>
         <a target='_blank' href="https://www.linkedin.com/in/anujith-p-a5b079239/"><Button >Hire Me</Button></a> 
        
        
      </Card>
      <Card>
        <Card.Img  src={img1} className='my-img' />
        
       
      </Card>
      </CardGroup>
    </div>
  )
}

export default FB1

