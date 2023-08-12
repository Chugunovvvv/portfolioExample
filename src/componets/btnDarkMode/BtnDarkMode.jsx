import React, { useEffect } from 'react'
import Moon from '../../img/nightMode/Moon.svg'
import Sun from '../../img/nightMode/Sun.svg'

import { useLocalStorage } from '../../utils/useLocalStorage';
import '../btnDarkMode/btnDarkMode.scss';
import detectDarkMode from '../../utils/detectDarkMode';
const BtnDarkMode = () => {
    

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    
    useEffect(() => {
        if(darkMode === 'dark') {
            document.body.classList.add('dark')
           
        } else {
            document.body.classList.remove('dark')
            
        }
    }, [darkMode])


    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {
                const newColorScheme = e.matches ? 'dark' : 'light'
                setDarkMode(newColorScheme)
            })
    }, [setDarkMode])

    const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
        return currentValue === 'light' ? 'dark' : 'light';
        
    })

}
    const normalBtn = 'dark-mode-btn'
    const normalBtnActive = 'dark-mode-btn dark-mode-btn--active'
  return (
    <button className={darkMode === 'dark' ? normalBtnActive : normalBtn} onClick={toggleDarkMode}>
    <img src={Sun} className="dark-mode-btn__icon" alt="sun"/>
    <img src={Moon} className="dark-mode-btn__icon" alt="dark"/>
</button>
  )
}

export default BtnDarkMode