import React from 'react'
import './projectOne.scss'
import { useParams } from 'react-router-dom'
import {Projects} from '../../helpers/projects/project'

const ProjectOne = () => {
  const {id} = useParams();   // получаем id каждого проекта
  const project = Projects[id];  


  return (
    <div className='skills'>
      <div className="skills__container container">
                        <h2 className="skills__title title">{project.title}</h2>

                        <div className="skills__img">
                            <img src={project.imgBig} alt=""/>
                        </div>
                        <p className="skills__text">
                            {project.skills}
                        </p>
                        <a href='#!' className="skills__link" >GitHub repo</a>
                        
                    </div>
    </div>
  )
}

export default ProjectOne