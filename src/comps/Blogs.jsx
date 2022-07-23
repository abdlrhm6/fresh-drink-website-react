import React from 'react'
import read from '../assets/read.png'
import duration from '../assets/duration.png'
import share from '../assets/share.png'

function Blogs(props) {
    return (
        <div className='blog'>
            <div className="blog-image">

                <img src={props.img} alt="" />
            </div>


            <div className="text">
                <h5>{props.title}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero quia nobis repellat, sit numquam beatae illum molestias laudantium veniam, ratione debitis?</p>

                <div className="links">
                    <div className="read">

                        <img src={read} alt="" />
                        <span>Continue Reading</span>
                    </div>

                    <div className="duration">

                        <img src={duration} alt="" />
                        <span>Reading Duration : 5 min</span>
                    </div>

                    <div className="share">

                        <img src={share} alt="" />
                        <span>Share</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blogs