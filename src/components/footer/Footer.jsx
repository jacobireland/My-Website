import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div className="mysite_footer">
        <div className="footer_socials">
          <a className="footer_linkedin" href="https://www.linkedin.com/in/jacob-ireland-a8a683189/" target="_blank" rel="noreferrer"> Linkedin</a>
          <a className="footer_twitter" href="https://twitter.com/jacob_ireland_" target="_blank" rel="noreferrer"> Twitter</a>
          <a className="footer_instagram" href="https://www.instagram.com/_jacob_ireland/?hl=en" target="_blank" rel="noreferrer"> Instagram</a>
        </div>
        <div className="footer_email">
          <h1 className="email_word"> Email:</h1>
          <a className="email" href="mailto:jacobireland01@gmail.com"> jacobireland01@gmail</a>
        </div>
      </div>
    </div>
  )
}

export default Footer