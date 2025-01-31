import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import abishek from '../../assets/abishek.png'

export const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        <img src={theme_pattern} alt="" />
        </div>
         <div className="about-sections">
            <div className="about-left">
                <img src={abishek} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a beginner frontend developer and still learning and improving myself to become a skillfull developer.</p>
                    <p>I am passionate towards my work and i am willing to become fullstack developer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p> <hr style={{width:'50%'}} /></div>
                    <div className="about-skill"> <p>React Js</p>   <hr style={{width:'70%'}} /></div>
                    <div className="about-skill"> <p>JavaScript</p> <hr style={{width:'60%'}} /></div>
                    <div className="about-skill"> <p>Python</p>     <hr style={{width:'50%'}} /></div>
                </div>
            </div>     
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>0</h1>
                <p>Clients</p>
            </div>
            <hr />
        </div>
    </div>
  )
}
