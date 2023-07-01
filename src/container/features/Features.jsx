import React from 'react'
import './Features.css'
import {Feature} from '../../components'
const FeaturesData=[
  {
    title:'This is title One',
    text:'Text one lskjdfga sdca sdkc asdc aosug dcaosd '
  },
  {
    title:'This is title Second',
    text:'Text one lskjdfga sdca sdkc asdc aosug dcaosd '
  },
  {
    title:'This is title Three',
    text:'Text one lskjdfga sdca sdkc asdc aosug dcaosd '
  },
  {
    title:'This is title FOur',
    text:'Text one lskjdfga sdca sdkc asdc aosug dcaosd '
  },
  {
    title:'This is title Five',
    text:'Text one lskjdfga sdca sdkc asdc aosug dcaosd '
  },
]
const Features = () => {
  return (
    <div className="gpt4__features section__padding" id="features">
      <div className="gpt4__features-heading">
        <h1 className="gradient__text">
          The Future Is Just Now You Just Have to Step In And & It Happen
        </h1>
        <p>
          Request early access
        </p>
      </div>
      <div className="gpt4__features-container">
        {FeaturesData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features