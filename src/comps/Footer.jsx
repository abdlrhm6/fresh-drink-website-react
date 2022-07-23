import React from 'react'
import fb from '../assets/fb.png'
import yt from '../assets/yt.png'
import li from '../assets/li.png'
import './foot.css'
function Footer() {
  return (
   <>
   
   <div className='foot'>
    <div className="works">
        <h1>GigaWORKS.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nisi obcaecati deserunt minus, sed eos assumenda similique quia ratione dicta maxime eius.</p>
        <div className="social">
            <img src={fb} alt="" />
            <img src={li} alt="" />
            <img src={yt} alt="" />
        </div>
    </div>
    <div className="job">
        <h1>Jobs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatem eum, ipsa quaerat, commodi numquam est quidem voluptatibus dolor unde, consequuntur illum?</p>
        <h3>+0483 948 2553 1872</h3>
    </div>
    <div className="find">
        <h1>Find Us</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quaerat iure!
        </p>
        <h3>Cigawo@example.com</h3>
        <h3>+0483 948 2553 1872.</h3>
    </div>


    </div>
    
    <p className='copyright'>All Right Reserved .GIGAworks.{ new Date().getFullYear() }</p></>
  )
}

export default Footer