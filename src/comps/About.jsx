import React from 'react'
import './about.css'
import about from '../assets/about.png'
import Aboxes from './Aboxes'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'

let boxDetails = [{
    title : 'Healthy Drinks',
    id:1,
    img : box1
},
{
    title : 'RESTO\'S FIRST CHOICE',
    id:2,
    img : box2
},
{
    title : 'Nature Flavors',
    id:3,
    img : box3
}]
function About() {
  return (
    <div>
        <h1 className='title'>ABOUT</h1>
        <div className="about-container">
            <div className="image">
                <img src={about} alt="restaurant" />
            </div>

            

            <div className="boxes">
               
               {boxDetails.map( b => (
                <Aboxes title={b.title} key={b.id} img={b.img}/>
               ))}
            </div>
        </div>

        <div className="stats">
            <div className="stat">
                <h1>+890</h1>
                <p>Daily Orders</p>
            </div>
            <div className="stat">
                <h1>+78</h1>
                <p>flavors</p>
            </div>
            <div className="stat">
                <h1>+52</h1>
                <p>Branches</p>
            </div>
            <div className="stat">
                <h1>+530</h1>
                <p>Employees</p>
            </div>
        </div>

    </div>
  )
}

export default About