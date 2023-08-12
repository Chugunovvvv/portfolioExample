import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.scss'
import Header from "../src/componets/header/Header"
import Home from './pages/home'
import Footer from './componets/footer/footer'
import ProjectOne from './pages/projectPage/projectOne';
import Contacts from './pages/contacts/Contacts';
import Skills from './pages/skills/Skills';
import ScrollToTop from './utils/scrollToTop';
import Project from './pages/projects/project'


const App = () => {
  return (
    <div className="App">
         <Router>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/project/:id' element={<ProjectOne/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
      </Routes>
    
    <Footer/>
    </Router>
   



    </div>
  )
}

export default App