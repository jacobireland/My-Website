import React from 'react'
import './header.css';
import propic from '../../assets/profile2.png';

const Header = () => {
  return (
    <div className="mysite_header" id="home">
      <div className="mysite_header-content">
        <div className="mysite_header-propic">
          <img src={propic} width="180" height="235" alt="propic"/>
        </div>
        <div className="mysite_header-intro">
          <h1 className="mysite_header-name"> Jacob Ireland</h1>
          <div className="bio">
            <p> Columbia University '24</p>
            <p> Computer Science Major</p>
            <p> Student Athlete</p> 
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Header