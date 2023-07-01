import React from 'react'
import './Header.css'
// import 
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <div className="gpt4__header-content__left">
        <h1 className='gradient__text'>Welcome To Ai</h1>
        <p className='header__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at est repellat sint doloribus, dolores error commodi laudantium cupiditate dolorem? Voluptatum illo ut velit ipsum distinctio deleniti perferendis ipsa iure!</p>
        <div className="gpt4__header-content__input">
          <input type="email" placeholder='Your Email address' />
          <button>Get Started</button>
        </div>
        <div className="gpt4__header-content__people">
          {/* <img src={people} alt="" srcset="" /> */}
        </div>
        </div>
        <div className="gpt4__header-content__right">
        <div className="gpt4__header-image">
          <img src={ai} alt="Ai" srcset="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header