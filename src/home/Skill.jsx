import React, { useContext } from 'react'
import { Card, CardBody, CardGroup, ProgressBar } from 'react-bootstrap'
import img3 from './skillimg.jpg'
import  './skill.css'
import img4 from './arif-riyanto-G1N9kDHqBrQ-unsplash.jpg'
import { ThemeContext } from './Navtheme'

const Skill = () => {
  const themeuse=useContext(ThemeContext)
    console.log(themeuse);
const{theme,toggleTheme}=themeuse
console.log(theme);
  return (
    <div id='skill' className={theme=='light'?'light':'dark'}>
     
       <CardGroup>
      <Card>
        <Card.Img className='skill-img' src={img3} />
       
        
      </Card>
      <Card>
        <Card.Body className='p-4 '>
            <h4 className='my-skill'>My skills</h4>
            <h1>My Featured Skills</h1>
            <p >I Specialize in Branding and Strategy, and am passionate about creating Awesome Portfolio work. And I always ready to impress the audience with my Creativity.</p>
        <div className='skill-item'>
            
          <h3 className='pt-3 '>Javascript</h3>
          <ProgressBar  animated now={70} />
          <h3 className='pt-3 '>Html</h3>
          <ProgressBar animated now={90} />
          <h3 className='pt-3 '>CSS</h3>
          <ProgressBar animated now={85} />
          <h3 className='pt-3 '>React</h3>
          <ProgressBar animated now={89} /> 
        </div>




        </Card.Body>
    
      </Card>
      </CardGroup>

    <div className={theme=='light'?'light':'dark'}>

  
      <CardGroup  className='card-group2'>
      <Card className={theme=='light'?'light':'dark'}>
        <CardBody className='card-body3'>
            <div className="skill-items">
                <div className='d-flex justify-content-evenly    '>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-browser-chrome" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
                    <h3>Web Development</h3>
                </div>
                <div className='d-flex justify-content-evenly    '>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/>
</svg>
                    <h3>Web Desinging</h3>
                </div>
                <div className='d-flex justify-content-evenly    '>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-hdd-network-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
</svg>
                    <h3>Networking</h3>
                </div>
                <div className='d-flex justify-content-evenly    '>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
</svg>
                    <h3>Cloud service</h3>
                </div>
                <div className='d-flex justify-content-evenly    '>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-braces-asterisk" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5z"/>
</svg>
                    <h3>Code Efficent</h3>
                </div>
                <div className='d-flex justify-content-evenly    '>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
                    <h3>Responsive Design</h3>
                </div>
                

            </div>
        </CardBody>
        </Card>
      <Card>
        <Card.Img  src={img4} className='skill-img' />
        
      </Card>
      </CardGroup>

    </div>
    </div>
  )
}

export default Skill
