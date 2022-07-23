import React from 'react'
import read from '../assets/readmore.png'
function Aboxes(props) {
  return (
    <div className='box'>
        <h4 className='btitle'>{props.title}</h4>
        <p>Lorem ipsum dolor sit amethollyg consectetur adipisicing dolor sit amethhkdjk consectetur adipisicingelit. Porro laboriosam persp?</p>
        <div className="read">
                <img src={read} alt="" /> Read More
        </div>
        <div className="image">
            <img src={props.img} alt="" />
        </div>
    </div>
  )
}

export default Aboxes