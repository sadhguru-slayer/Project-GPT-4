import React from 'react'
import './Possibility.css'
import possibility from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id='possibility'>
      <div className="gpt4__possibility-image">
        <img src={possibility} alt="Possibility" srcset="" />
      </div>
      <div className="gpt4__possibility-content">
        <h4>Request</h4>
        <h1 className='gradient__text'>The Possibilities are beyond our imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident beatae voluptate iure sed iste laborum modi inventore ut itaque error ullam quasi minus quo, animi excepturi! Esse animi ratione odit.</p>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolore!</h4>
      </div>
    </div>
  )
}

export default Possibility;