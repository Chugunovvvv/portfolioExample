import React from 'react'
import '../skills/skills.scss'


const Skills = () => {
  return (
    <div className="about">
     <div class="about__container">
                   <h3 class="about__title title">
                    Skills
                   </h3>
                   <div class="about__block">
                    <h4 class="about__name">Frontend </h4>
                    <p class="about__text">JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                   </div>
                   <div class="about__block">
                    <h4 class="about__name">Backend</h4>
                    <p class="about__text">NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                   </div>
                </div>
    </div>
   
  )
}

export default Skills