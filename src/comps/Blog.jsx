import React from 'react'
import './blog.css'
import section1 from '../assets/section1.png'
import section2 from '../assets/section2.png'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import Blogs from './Blogs'

let blo = [{
    id: 1,
    title: "Are juice more nutritous more than fresh fruits.",
    img: blog1
},

{
    id: 2,
    title: "Citrus juice",
    img: blog2
}

    ,
{
    id: 3,
    title: "Juice and people with diabets",
    img: blog3
},
{
    id: 4,
    title: "Vegetarien diets",
    img: blog4
}]
function Blog() {
    return (


        <>


            <h1 className='title'> BLOGS</h1>
            <div className='blogs'>

                <div className="section1">
                    <img src={section1} alt="" />
                </div>

                <div className="section2">
                    

                    <div className="blog-container">
                        
                        {blo.map( b => (
                                <Blogs key={b.id} {...b}/>

                        ))}

                    </div>
                </div>





            </div></>
    )
}

export default Blog