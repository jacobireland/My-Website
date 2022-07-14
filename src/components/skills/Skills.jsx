import React from 'react'
import './skills.css';
import { FaJava, FaPython, FaReact, } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { AiOutlineApi } from 'react-icons/ai';
import clogo from '../../assets/clogofinal.jpg';

const Skills = () => {
  return (
    <div>
      <div className="mysite_skills" id="skills">
        <h1 className="skills"> Skills</h1>
        <div className="skills_row1">
          <div className="python">
            <FaPython className="py_logo" size={130} color="#f8825b"></FaPython>
            <h1 className="py_name"> Python</h1>
            <h1 className="py_blurb"> Over the past two years I’ve had the opportunity to work with Python during my classes and on my won time. I have extensive experience using Google Collaboratory alongside Python and the matplotlib functionality. One of my personal projects that highly utilized these tools was my Spotify API Playlist Generator.</h1>
          </div>
          <div className="clang">
            <img className="c_logo" src={clogo} width="130" alt="c logo"/>
            <h1 className="c_name"> C</h1>
            <h1 className="c_blurb"> I put extensive time into the C language during the 2021 school year. Throughout my Advanced Programming course, I became highly familiarized with the language and learned how to work adeptly with Valgrind, VIM, Netcat, and Internet protocols. Using these tools, I coded an HTTP Web server that serves static HTML and image files.</h1>
          </div>
          <div className="java">
            <FaJava className="java_logo" size={130} color="#f8825b"></FaJava>
            <h1 className="java_name"> Java</h1>
            <h1 className="java_blurb"> I’ve spent the past 2.5 years studying and working with the Java programming language. During this time I worked with numerous sorting algorithms and recursive procedures, created an online Poker game, and walked fellow students through multiple other programming projects.</h1>
          </div>
        </div>
        <div className="skills_row2">
          <div className="react">
            <FaReact className="react_logo" size={130} color="#f8825b"></FaReact>
            <h1 className="react_name"> React JS</h1>
            <h1 className="react_blurb"> I have a basic understanding of React and its implementations (enough to code this whole website!)</h1>
          </div>
          <div className="javascript">
            <DiJavascript1 className="js_logo" size={130} color="#f8825b"></DiJavascript1>
            <h1 className="js_name"> Javascript, HTML, CSS</h1>
            <h1 className="js_blurb"> I used all three of these extensively while coding and implementing this website. I consider myself quite adept at utilizing and implementing these languages.</h1>
          </div>
          <div className="api">
            <AiOutlineApi className="api_logo" size={130} color="#f8825b"></AiOutlineApi>
            <h1 className="api_name"> API Implementation</h1>
            <h1 className="api_blurb"> I spent the summer of 2022 learning and implementing different APIs. I’m quite familiar with Python-API implementation and utilized my knowledge during my Spotify API Playlist Generator project.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills