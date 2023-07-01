import React from 'react'
import './Footer.css'
// import gpt4logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <div className="gpt4__footer-btn">
          <p>Request early access</p>
        </div>
        <div className="gpt4__footer-links">
          <div className="gpt4__footer-links_logo">
            <h1 className="logo">GPT-4</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, expedita.</p>
          </div>
          <div className="gpt4__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt4__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt4__footer-links_div">
            <h4>Get in touch</h4>
            <p>Hyderabad</p>
            <p>0000 000 000</p>
            <p>abcd@abcd.com</p>
          </div>
          <div className="gpt4__footer-copyright">
            <p>©2023 onwards Ai All rights</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer