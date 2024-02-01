import React, { useContext } from 'react'
import FB1 from './home/FB1';
import About1 from './home/About1';
import Service1 from './home/Service1';
import Skill from './home/Skill';
import Project from './home/Project';
import Contact from './home/Contact';
import  Slide1 from './home/Slide1'
import Footer1 from './home/Footer1';
import Navtheme, { ThemeContext } from './home/Navtheme';
import Navigatiion from './home/Navigatiion';
import './App.css'

const App = () => {
    const themeuse=useContext(ThemeContext)
    console.log(themeuse);
const{theme,toggleTheme}=themeuse
console.log(theme);

const themechange={
    backgroundColor:theme=='light' ? 'white':'black',
    color:theme=='light' ? 'black':'white'
}
  return (
    <div className={theme=='light'?'light':'dark'}>

<Navigatiion/>
{/* <Firstbody/>   */}
<div className={theme=='light'?'light':'dark'} >

<FB1/>
<div className={theme=='light'?'borderLight':'borderDark'}>

<About1/>
</div>
<div className={theme=='light'?'borderLight':'borderDark'}>

<Service1/>
</div>
<div className={theme=='light'?'borderLight':'borderDark'}>

<Skill/>
</div>
<div className={theme=='light'?'borderLight':'borderDark'}>

<Project/>
</div>
<Contact/>
<Slide1/>
<Footer1/>
</div>
    </div>
  )
}

export default App
