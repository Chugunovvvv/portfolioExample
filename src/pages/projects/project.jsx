import React from 'react'
import ProjectItem from '../../componets/projectComponent/project-item'
import {Projects} from '../../helpers/projects/project'
import '../projects/project.scss'

const Project = () => {
  return (
    <div className="project">
        <div className="project__container container">
            <h2 className="project__title">Projects</h2>
            <ul className="project__list">
            {Projects.map((item, index) =>{
                return <ProjectItem index={index} key={index} title={item.title} img={item.img}/>
            })}
                
            </ul>
        </div>
    </div>
  )
}

export default Project
