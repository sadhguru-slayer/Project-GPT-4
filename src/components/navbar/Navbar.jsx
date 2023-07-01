// import { useState } from 'react';
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { BsFillPersonPlusFill } from "react-icons/bs";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatgpt4">What is GPT4</a>
    </p>
    <p>
      <a href="#possibility"> Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          {/* <img alt="GPT4" srcset="" /> */}
          <h2>GPT4</h2>
        </div>
        <div className="gpt4__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <p>
          <a href="#signup">Sign In</a>
        </p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt4__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={24}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={23}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt4__navbar-menu_container scale-up-ver-top">
            <div className="gtp4__navbar-menu_container-links">
              <Menu />
              <hr></hr>
              <div className="gpt4__navbar-menu_container-links-sign">
                <p>
                  <a href="#signup">Sign In</a>
                </p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
