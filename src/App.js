import React from 'react'

import { Navbar, Header, About, Skills, Projects, Footer, } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="main_background">
        <Navbar />
        <Header />
      </div>
      <About />
      <div className="skills_page">
        <Skills />
      </div>
      <div className="projects_page">
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App