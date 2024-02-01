import React from 'react'
import './first.css'
import { TypeAnimation } from 'react-type-animation'
import { Button } from 'react-bootstrap'
import img1 from './my.jpg.png'

const Firstbody = () => {
    
  return (
    <div className='main-div1  '>
      <div className='my-name'>
        <h1 className='my-name1'>Hi I'M Anujith P</h1>
        <h1 className='my-role'>
        <TypeAnimation
    sequence={[
     'Web Developer',1000,
     'Web Desinger',1000
    ]}
    
  />
   </h1>
        <p>I love web desining and developing . I work on that since 2022 <br /> I can give your company a new start right away</p>
        
        <Button className='nav-button'>Hire ME</Button>
            
       
      </div>

    <img src={img1} alt="" /> 
    </div>
  )
}

export default Firstbody
