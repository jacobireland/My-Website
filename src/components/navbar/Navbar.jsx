import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css' ;

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#skills">Skills</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#blog">Library</a></p>  
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="mysite_navbar">
      <div className="mysite_navbar-links">
        <div className="mysite_name">
          <p>Jacob Ireland</p>
        </div>
        <div className="mysite_navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#about">ABOUT</a></p>
          <p><a href="#skills">SKILLS</a></p>
          <p><a href="#projects">PROJECTS</a></p>
          <p><a href="#blog">OTHER</a></p>
        </div>
      </div>
      <div className="mysite_navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="00000" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="00000" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="mysite_navbar-menu_container scale-up-center">
            <div className="mysite_navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar