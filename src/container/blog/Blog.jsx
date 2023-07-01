import React from 'react'
import './Blog.css'
import {blog01,blog02,blog03,blog04,blog05} from './import';
import { Article } from '../../components';
const Blog = () => {
  return (
    <div className="gpt4__blog  section__padding" id='blog'>
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <Article imgUrl={blog01} date="Jan 29,2023" title="This blog is freaking awesome"/>
        </div>
        <div className="gpt4__blog-container_groupB">
          <Article imgUrl={blog02} date="Jan 29,2023" title="This blog is freaking awesome"/>
          <Article imgUrl={blog03} date="Jan 29,2023" title="This blog is freaking awesome"/>
          <Article imgUrl={blog04} date="Jan 29,2023" title="This blog is freaking awesome"/>
          <Article imgUrl={blog05} date="Jan 29,2023" title="This blog is freaking awesome"/>
        </div>
      </div>
    </div>
  )
}

export default Blog