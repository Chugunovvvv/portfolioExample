import React from 'react'
import '../hero/hero.scss'
const Hero = () => {
  return (
    <>
        <div className="hero">
        <div className="hero__container container">
            <h1 className="hero__title">
            Hi, my name is  <span>Roman</span> frontend developer
            </h1>
            <div className="hero__text">
            with passion for learning and creating.
            </div>
            <div className="hero__btns">
            <button className="hero__btn">Download CV</button>
            </div>
            
        </div>
    </div>
    </>

  )
}

export default Hero