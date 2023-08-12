import React, { useState } from 'react'
import "../header/header.scss"
import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';


export const Header = () => {
  const activeLink = "header__link header__link--active";
  const normalLink = "header__link";
  const [menu, setMenu] = useState(false);  // заадем состояние для изменения бургера
  return (
    <header>
    <div className="header__container container">
      <NavLink to="/" className="header__logo"><span>Freelancer</span> portfolio</NavLink>
      

    
 
    <BtnDarkMode/>
    


      <div onClick={() => {
        setMenu(!menu)
      }} className={menu ? ['burger', ' active'].join('') : 'burger' }>
        
        <span></span><span></span><span></span>
      </div>
      <nav className={menu ? ['header__nav', ' active'].join('') : 'header__nav'} onClick={()=> {setMenu(false)}}>
        <ul className="header__list" onClick={(e) => e.stopPropagation()}>
          <li>
          <NavLink to="/projects" className={({isActive}) => {
            return isActive ? activeLink : normalLink;
          }}>
          Projects
          </NavLink>
          </li>
          <li>
          <NavLink to="/skills" className={({isActive}) => {
            return isActive ? activeLink : normalLink;
          }}>Skills</NavLink>
          </li>
          <li>
          <NavLink to="/contacts" className={({isActive}) => {
            return isActive ? activeLink : normalLink;
          }}> 
          Contacts
          </NavLink>
          </li>
        </ul>
      </nav> 

    </div>
    
    </header>
  )
}

export default Header