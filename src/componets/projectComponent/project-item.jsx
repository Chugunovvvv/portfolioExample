import React from 'react'
import '../projectComponent/project-item.scss'
import { NavLink } from 'react-router-dom'

const ProjectItem = ({title, img, index}) => {
  return (
    <>
    <NavLink to={`/project/${index}`}>
    <li className='project__item'>
        <img src={img} alt="" className='project__img'/>
        
        <h3 className="project__link">
          {title}
        </h3>
        
    </li>

    </NavLink>
    

    </>
  )
}

export default ProjectItem