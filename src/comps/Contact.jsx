import React from 'react'
import contactImage from '../assets/contact.png'
import form1 from '../assets/form-1.png'
import form2 from '../assets/form-2.png'
import form3 from '../assets/form-3.png'

import './contact.css'

function Contact() {
  return (

    <>
    <h1 className='title'>
       CONTACT US </h1>
       <div className='s-contact'>

<div className="image">
    <img src={contactImage} alt="" />
</div>


<div className="form">
    <form >
        <label > Name</label>
       <div className="name">
        <img src={form1} alt="" />
        <input type="text" placeholder='Your Full Name' />
       </div>
        <label > Email</label>
        
        <div className="email">
          <img src={form2} alt="" />
          <input type="email" placeholder='Your Email Adress' />
        </div>
        <label > Message</label>
        <div className="textarea" >
          <img src={form3} alt="" />
        <textarea placeholder='Your Message' rows="5" cols="520"></textarea>

        </div>

        <input type="submit" value="SEND" />

    </form>
</div>
</div>
       
       </>

  )
}

export default Contact