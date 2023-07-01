import React from 'react'
import './WhatGPT4.css'
import { Feature } from '../../components'
const WhatGPT4 = () => {
  return (
    <div className="gpt4__whatgpt4  section__margin" id='whatgpt4'>
      <div className="gpt4__whatgpt4-feature">
      <Feature title="What is GPT-4" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, error cumque, debitis maiores mollitia iusto, tempore saepe neque laudantium voluptatibus repudiandae quam. Modi quibusdam neque necessitatibus provident sapiente. Numquam, quasi."/>
        <div className="gpt4__whatgpt4-heading">
          <div>

          <h1 className='gradient__text'>The Possibilites are beyond your imagination</h1>
          </div>
          <p>Lorem ipsum dolor sit.</p>
          {/* <p>E</p> */}
        </div>
        <div className="gpt4__whatgpt4-container">
          <Feature title="Understand" text="Needs to be more accurate and fun"/> 
          <Feature title="Improve" text="Needs to be more accurate and fun"/> 
          <Feature title="Practise" text="Needs to be more accurate and fun"/> 
          <Feature title="Apply" text="Needs to be more accurate and fun"/> 
        </div>
      </div>
    </div>
  )
}

export default WhatGPT4