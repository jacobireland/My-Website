import React from 'react';
import './projects.css';
import spotifyflic from '../../assets/SpotiyAPIFlic.png';
import serverflic from '../../assets/HTTP Server Flic.png';


const Projects = () => {

  return (
    <div>
      <div className="mysite_projects" id="projects">
        <h1 className="projects_name"> Projects</h1>
        <div className="projects_row1">
          <div className="spotify_project">
            <a className="spotify_img" href="https://github.com/jacobireland/Spotify-API-Playlist-Creator" target= "_blank" rel="noreferrer"><img src={spotifyflic} width="300px" alt="spotify API project" /></a>
            <h1 className="spotify_name"> Playlist Generator</h1>
            <h1 className="spotify_blurb"> Uses Spotify API to visualize a user’s top genres and create recommended playlists specific to their music taste.</h1>
          </div>
          <div className="webserver_project">
            <h1 className="webserver_private"> Unfortunately, due to course policies the code for this project is private and only available upon request. If you’re interested in viewing the full project, please reach out and I can give you access.</h1>
            <img className="webserver_img" src={serverflic} width="309px" alt="web server"/>
            <h1 className="webserver_name"> HTTP Web Server</h1>
            <h1 className="webserver_blurb"> Written in C, this is a simple HTTP web server that serves static HTML and image files and implements specific dynamic content.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects