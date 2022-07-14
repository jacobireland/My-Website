import React from 'react'
import './about.css';
import mntflic from '../../assets/memnt.jpg';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const About = () => {
  return (
    <div className="mysite_about-page" id="about">
      <div className="mysite_about">
        <div className="mysite_flic">
          <img src={mntflic} width="300" alt="running in mountains" />
        </div>
        <div className="mysite_about-info">
          <h1 className="name"> Jacob Ireland</h1>
          <h1 className="details"> CU '24, Computer Science, XCTF</h1>
          <h1 className="introduction"> I’m currently a Junior at Columbia University in the city of New York. I’m a member of the Cross Country and Track and Field team and am pursuing my bachelor’s degree in Computer Science. </h1>
          <h1 className="introduction2"> I grew up in the Bronx and have loved running and playing sports for as long as I can remember. When I stepped foot in Columbia’s halls I realized my passions didn’t end there, as I fell in love with CS the moment I coded my very first if statement my freshman year.</h1>
          <h1 className="interests"> My main interests are security and software development, but I’m eager to expand those interests to include the many other fascinating fields of computer science. On this website you can find my resume, projects, and more information about both my academic and personal lives!</h1>
        </div>
      </div>
      <div className="mysite_about-socials">
        <a className="linkedin" href="https://www.linkedin.com/in/jacob-ireland-a8a683189/" target="_blank" rel="noreferrer"><FaLinkedin size={40}></FaLinkedin></a>
        <a className="twitter" href="https://twitter.com/jacob_ireland_" target="_blank" rel="noreferrer"><FaTwitter size={40}></FaTwitter></a>
        <a className="instagram" href="https://www.instagram.com/_jacob_ireland/?hl=en" target="_blank" rel="noreferrer"><FaInstagram size={40}></FaInstagram></a>
      </div>
    </div>
  )
}

export default About